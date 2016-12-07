import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formValues) {
      this.model.setProperties(formValues);

      this.model.save ()
        .then(() => {
          this.transistionToRoute('admin.category.detail', this.get('model.profile.id'));
        });
    },
  },
});
