import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formValues) {
      const event = this.store.createRecord('event', formValues);

      event.save()
      .then(() => this.transitionToRoute('admin.homepage'));
    },
  },
});
