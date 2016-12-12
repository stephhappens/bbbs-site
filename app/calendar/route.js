import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('event');
  },
  // afterModel() {
  //   this.store.queryRecord('announcement', {
  //     latest: true,
  //   })
  //   .then((latestAnnouncement) => {
  //     console.log(latestAnnouncement.get('message'));
  //     this.get('flashMessages').success(latestAnnouncement.get('message'), {
  //       timeout: 60 * 1000,
  //       sticky: true,
  //       destroyOnClick: true,
  //     });
  //   });
  // }
});
