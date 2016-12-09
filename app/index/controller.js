import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    login(formValues) {
      const secretStuff = {
        identification: formValues.email,
        password: formValues.password,
      };
      const authenticator = 'authenticator:jwt';

      // Login user
      this.get('session').authenticate(authenticator, secretStuff)
        .then(() => {
          this.transitionToRoute('calendar');
        });
      // Redirect
    }
  }
});
