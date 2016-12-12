import Ember from 'ember';


export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    saveForm(formValues) {
      this.model.setProperties(formValues);

      this.model.save()
      .then(() => {
        alert('Event Saved!');
        this.transitionToRoute('admin.homepage');
      });
    },
  },
});
