import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),

  actions: {
    saveForm(user, formValues) {
      user.setProperties(formValues);

      user.save()
        .then(() => {
          this.transitionToRoute('profile');
        });
    },
  },
});
