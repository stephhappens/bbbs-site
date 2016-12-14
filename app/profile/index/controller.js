import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    saveMessage(formValues) {
      debugger;
      const flashMessages = this.get('flashMessages');
      const messages = this.store.createRecord('message', formValues);

      messages.save()
            .then(() => {
              flashMessages.success('Successfully Posted!');
            })
            .catch(() => {
              flashMessages.danger('Something went wrong!');
            });
    },
  },
});
