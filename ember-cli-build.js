'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      loose: true
    },
    'asset-cache': {
      include: [
        'assets/**/*',
        'icons/**/*',
        'manifest.webmanifest'
      ]
    },
    'ember-inline-css': {
      filter: [
        '/assets/vendor.css',
        '/assets/emberconf.css'
      ]
    },
    'ember-service-worker': {
      registrationStrategy: 'inline',
      versionStrategy: 'project-revision'
    },
    'esw-cache-fallback': {
      patterns: [ '/' ],
    },
    vendorFiles: {
      'jquery.js': null
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/something-hacky-this-way-comes.js', { prepend: true });

  return app.toTree();
};
