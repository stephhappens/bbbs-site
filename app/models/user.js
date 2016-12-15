import DS from 'ember-data';
import Ember from 'ember';

import config from 'bbbs-site/config/environment';

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
    return `${config.DS.host}/uploads/${this.get('profilePicUrl')}`;
  }),
});
