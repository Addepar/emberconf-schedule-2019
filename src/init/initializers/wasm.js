export function initialize(application) {
  application.deferReadiness();
  window.Ember.__loader.require('@glimmer/low-level').booted.then(() => {
    application.advanceReadiness();
  });
}

export default {
  name: 'wasm',
  initialize
};
