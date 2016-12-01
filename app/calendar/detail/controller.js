import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formValues) {
      return this.transitionToRoute('calendar');

      this.model.setProperties(formValues);
      this.model.save()
      .then(() => {
      });
    },
  },
});
