import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model() {
    return this.get('currentUser.user');
  },

  afterModel() {
    this.store.queryRecord('announcement', {
      latest: true,
    })
    .then((latestAnnouncement) => {
      console.log(latestAnnouncement.get('message'));
      this.get('flashMessages').success(latestAnnouncement.get('message'), {
        timeout: 60 * 1000,
        sticky: true,
        destroyOnClick: true,
      });
    });
  },
});
