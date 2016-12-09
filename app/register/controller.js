import Ember from 'ember';
import config from 'bbbs-site/config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  filesystem: Ember.inject.service(),

  actions: {
    saveUser(formValues) {
      // How to save if we are uploading an image
      if (formValues.uploadFile) {
        return this.get('filesystem').fetch(`${config.DS.host}/api/users`, {
          method: 'POST',
          headers: {
            accept: 'application/json',
          },
          body: { ...formValues },
        }).then(res => res.json())
        .then((data) => {
          this.store.pushPayload(data);
          this.transitionToRoute('calendar');
        });
      }

      // Save like normal ember data
      // Create a new user model
      const user = this.store.createRecord('user', formValues);
      // Save the new user model
      user.save()
      .then(() => {
        const secretStuff = {
          identification: formValues.email,
          password: formValues.password,
        };
        const authenticator = 'authenticator:jwt';

        // Login user
        this.get('session').authenticate(authenticator, secretStuff);
        // Redirect
        this.transitionToRoute('profile');
      })
      .catch((e) => {
        alert('Error creating user');
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
