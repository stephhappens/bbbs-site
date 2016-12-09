import Ember from 'ember';

export default Ember.Controller.extend({
  tickets: [1, 2, 3, 4],
  initial: 'Select Amount',


  actions: {
    saveForm(formValues) {
      const ticket = this.store.createRecord('ticket', formValues);
      ticket.set('event', this.model);

      ticket.save()
        .then(() => this.transitionToRoute('calendar'));
    },

    chooseAmount(tickets) {
      this.set('initial', tickets);
    }
  }
});
