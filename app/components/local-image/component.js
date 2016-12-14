import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  src: 'http://placecage.com/c/400/400',

  didReceiveAttrs() {
    const reader = new FileReader();
    const file = this.get('file');

    if (file) {
      reader.onload = (e) => {
        this.set('src', e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }
});
