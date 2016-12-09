import Ember from 'ember';

export default Ember.Controller.extend({
  tickets: [1, 2, 3, 4],
  initial: 'Select Amount',


  actions: {
    saveForm(formValues) {
      this.model.setProperties(formValues);
      this.model.save()
        .then(() => {});

      return this.transitionToRoute('calendar');
    },

    chooseAmount(tickets) {
      this.set('initial', tickets);
    }
  }
});
