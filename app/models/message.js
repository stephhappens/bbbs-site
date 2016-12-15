import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr(),
  user: DS.belongsTo('user'),
  date: DS.attr('string'),
  time: DS.attr('string'),
});
