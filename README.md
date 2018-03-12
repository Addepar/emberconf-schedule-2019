# EmberConf 2018 Schedule

[![TravisCi](https://travis-ci.org/201-created/emberconf-schedule-2018.svg?branch=master)](https://travis-ci.org/201-created/emberconf-schedule-2018)

## Features

* [Progressive Web App](https://madhatted.com/2017/6/16/building-a-progressive-web-app-with-ember)
  * Perfect 100 Lighthouse score
  * Save to home screen for fullscreen mobile experience
  * Offline cache fallback via service worker
* Fastboot Rehydration
* Module Unification
* [WASM](http://schedule-wasm.emberconf.com)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone git@github.com:201-created/emberconf-schedule-2018.git` this repository
* `cd emberconf-schedule-2018`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Deployment to Heroku occurs automatically for the `master` branch.

## Updating Source Data

A Ruby rake task is included in this project's `Rakefile` that will update the contents of `app/lib/data.js`:

```shell
gem install titleize # if titleize is not already installed
rake
```

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
