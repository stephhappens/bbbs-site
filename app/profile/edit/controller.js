import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),

  actions: {
    saveForm(formValues) {
      this.model.setProperties(formValues);

      this.model.save()
        .then(() => {
          this.transistionToRoute('profile');
        });
    },
  },
});
