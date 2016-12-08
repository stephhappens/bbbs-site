import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('login');
    this.route('homepage', function() {
      this.route('announcements');
      this.route('event');

      this.route('user', function(){
        this.route('detail', {path: `/:user_id`})
      });
     });
  });
  this.route('register');
  this.route('profile', function() {
    this.route('edit');
  });
  this.route('calendar', function() {
    this.route('detail');
  });
});
export default Router;
