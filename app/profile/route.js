import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service(),

  model() {
    return this.get('currentUser.user');
  },

  afterModel() {
    this.store.queryRecord('announcement', {
      latest: true,
    })
    .then((latestAnnouncement) => {
      this.get('flashMessages').success(latestAnnouncement.get('message'), {
        timeout: 60 * 1000,
        sticky: true,
        destroyOnClick: true,
      });
    });
  },
});
