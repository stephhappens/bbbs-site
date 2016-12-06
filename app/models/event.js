import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  date: DS.attr('date'),
  location: DS.attr('string'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  tickets: DS.attr('number'),
  users: DS.hasMany('user'),
  message: DS.attr('string'),
});
