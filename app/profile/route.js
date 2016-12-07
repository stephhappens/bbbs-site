import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model(params) {
    return this.get('currentUser.user')
  }
});
