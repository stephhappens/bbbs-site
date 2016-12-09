import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  filesystem: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    saveMessage(formValues) {
      const flashMessages = this.get('flashMessages');
      const announcement = this.store.createRecord('announcement', formValues);

      announcement.save()
        .then(() => {
          flashMessages.success('Successfully Posted!');
        })
        .catch(() => {
          flashMessages.danger('Something went wrong!');
        });
    },
  },
});
