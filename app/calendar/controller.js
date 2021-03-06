import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service('current-user'),
  session: Ember.inject.service(),

  actions: {
    deleteEvent(event) {
      event.destroyRecord().then(() => {
        alert('Are you sure you want to delete this event?');
        this.transitionToRoute('admin.homepage');
      });
    },
  },
});
