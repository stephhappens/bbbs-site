import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr(),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('string'),
});
