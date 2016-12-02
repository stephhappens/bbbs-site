import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  date: DS.attr('date'),
  location: DS.attr('string'),
  startTime: DS.attr('integer'),
  endTime: DS.attr('enteger'),
  tickets: DS.attr('integer'),
  users: DS.hasMany('user')
});
