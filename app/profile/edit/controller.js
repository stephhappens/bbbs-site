import Ember from 'ember';
import config from 'bbbs-site/config/environment';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  filesystem: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    saveForm(user, formValues) {
      // How to save if we are uploading an image
      if (formValues.uploadFile) {
        const token = this.get('session.session.content.authenticated.token');

        return this.get('filesystem').fetch(`${config.DS.host}/api/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: { ...formValues },
        }).then(res => res.json())
          .then((data) => {
            this.store.pushPayload(data);
            this.transitionToRoute('profile');
          });
      }

      // Save like normal ember data
      user.setProperties(formValues);

      user.save()
        .then(() => {
          this.transitionToRoute('profile');
        });
    },

    choosePic(formValues) {
      this.get('filesystem').prompt()
        .then((upload) => {
          formValues.set('uploadFile', upload[0]);
        });
    },
  },
});
