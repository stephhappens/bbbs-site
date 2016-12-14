import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  isAdmin: DS.attr('boolean'),
  employer: DS.attr('string'),
  phone: DS.attr('string'),
  little: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  isApproved: DS.attr('boolean'),
  events: DS.hasMany('event'),
  tickets: DS.hasMany('ticket'),

  profilePicUrl: DS.attr('string'),

  fullProfilePicUrl: Ember.computed('profilePicUrl', function () {
    return `http://localhost:3333/uploads/${this.get('profilePicUrl')}`;
  }),
});
