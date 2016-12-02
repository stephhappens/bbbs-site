import DS from 'ember-data';

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
  events: DS.hasMany('event')
});
