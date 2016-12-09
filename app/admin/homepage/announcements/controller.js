import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  filesystem: Ember.inject.service(),

  actions: {
      saveMessage(formValues) {
  },
},
});
