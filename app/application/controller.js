import Ember from 'ember';

export default Ember.Controller.extend({
  // currentUser: Ember.inject.service('current-user'),
  session: Ember.inject.service(),
});
