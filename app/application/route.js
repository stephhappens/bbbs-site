import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model() {
    return this.get('currentUser').loadCurrentUser();
  }
});
