/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "EmberConf",
    short_name: "EmberConf",
    description: "EmberConf 2018 Schedule",
    start_url: "/",
    display: "standalone",
    background_color: "#e8edf1",
    theme_color: "#e15d44",
    icons: [
      {
        src: '/icons/192.png',
        sizes: '192x192'
      },
      {
        src: '/icons/512.png',
        sizes: '512x512'
      },
      {
        src: '/icons/280.png',
        sizes: '280x280',
        targets: ['apple']  // non-standard property
      },
      {
        src: '/icons/favicon.png',
        sizes: '32x32',
        targets: ['favicon']
      },
      {
        src: '/icons/70.png',
        element: 'square70x70logo', // non-standard property
        targets: ['ms'] // non-standard-property
      },
      {
        src: '/icons/logo-mono.svg',
        safariPinnedTabColor: '#e15d44', // non-standard property
        targets: ['safari-pinned-tab'] // non-standard-property
      }
    ],
    apple: {
      statusBarStyle: 'black-translucent'
    },
    ms: {
      tileColor: '#001d36'
    }
  };
}
