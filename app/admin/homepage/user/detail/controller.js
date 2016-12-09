import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  actions: {
    toggleAndSave(property) {
      const user = this.model;
      user.toggleProperty(property);
      user.save();
    },

    deleteUser() {
      const no = this.model
      no.destroyRecord().then(() => {
        this.transitionToRoute('admin.homepage.user');
      });
    }
  },
});
