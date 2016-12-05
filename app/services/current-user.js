import Ember from 'ember';

export default Ember.Service.extend({
  // Get other services we need for this to work
  store: Ember.inject.service(),
  session: Ember.inject.service(),

  user: null,

  loadCurrentUser() {
    // Only load the current user if the session is logged in
    if (this.get('session.isAuthenticated')) {
      // Return current promise for loading current user
      this.get('store').queryRecord('user', {
        current: true,
      }).then((user) => {
        // Set the "user" value for use in our app!
        this.set('user', user);
      });
    }
  }
});
