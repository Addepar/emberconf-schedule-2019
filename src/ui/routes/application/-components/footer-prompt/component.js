import Component from '@ember/component';

export default Component.extend({
  tagName: 'footer',
  classNameBindings: ['isDismissed'],

  isDismissed: false,

  actions: {
    closePrompt() {
      this.set('isDismissed', true);
      // set a cookie
    }
  }
});
