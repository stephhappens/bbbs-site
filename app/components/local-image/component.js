import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  src: 'http://www.clker.com/cliparts/d/L/P/X/z/i/no-image-icon-md.png',

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
