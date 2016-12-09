import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  date: DS.attr('date'),
  headline: DS.attr('string'),
  message: DS.attr('string')
});
