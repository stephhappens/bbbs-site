import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formValues) {
      const event = this.store.createRecord('event');

      event.save()
      .then(() => {
        return this.transitionToRoute('admin.homepage');
      });
    },
  },
});
