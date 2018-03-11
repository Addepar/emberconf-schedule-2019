(function() {
  if (typeof FastBoot !== 'undefined') {
    self.atob = FastBoot.require('atob');
  }
})();
