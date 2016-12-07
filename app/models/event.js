import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  date: DS.attr('string'),
  location: DS.attr('string'),
  startTime: DS.attr('string'),
  endTime: DS.attr('string'),
  tickets: DS.attr('number'),
  users: DS.hasMany('user'),
  message: DS.attr('string'),
});
