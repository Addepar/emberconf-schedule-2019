# EmberConf 2019 Schedule

[![TravisCi](https://travis-ci.org/201-created/emberconf-schedule-2018.svg?branch=master)](https://travis-ci.org/201-created/emberconf-schedule-2018)

_This tech demo is brought to you via the EmberConf sponsorship from 201 Created. Like this demo project and want to explore these cutting edge features with your own codebase? 201 Created has worked on dozens of apps with Fortune 50 companies and Y-combinator startups. Visit [201-created.com](https://www.201-created.com/) or email [hello@201-created.com](mailto:hello@201-created.com) to talk with us._

## Features

* [Progressive Web App](https://madhatted.com/2017/6/16/building-a-progressive-web-app-with-ember)
  * Perfect 💯 Lighthouse score
  * Save to mobile home screen for fullscreen app experience
  * Offline cache fallback via service worker

* [Module Unification](https://github.com/emberjs/rfcs/blob/master/text/0143-module-unification.md) File Layout
  * File system migrated with [ember-module-migrator](https://github.com/rwjblue/ember-module-migrator)
  * Review the project's file structure organized within `src` directory rather than `app`
  * Uses local component lookup (components found in context-aware `-component` directories)

  Be sure to watch "Who Moved My Cheese" by Mathew Beale at EmberConf on 3/13 at 3:00 to see more about this feature.

* [Fastboot Rehydration](https://github.com/glimmerjs/glimmer-vm/commit/316805b9175e01698120b9566ec51c88d075026a)

  What is Rehydration?

  The rehydration feature means that the Glimmer VM can take a DOM tree created
  using Server Side Rendering (SSR) and use it as the starting point for the
  append pass. This reuses the rendering work already done on the server, allowing
  Ember applications to start with the existing DOM rather than throwing it away and generating it all over again client-side.

* [Separate WASM Version](https://schedule-wasm.emberconf.com) Also Available
  * Deployed separately because Mobile Safari has temporarily dropped WASM support ☹️

  What we mean by a WASM version is that the version at
  schedule-wasm.emberconf.com has a version of Ember.js compiled with a version
  of glimmer-vm that utilizes Web Assembly transpiled from Rust code to do much
  of the low-level (super-duper low level) heavy lifting.

* [ES5 Getters](https://github.com/emberjs/rfcs/blob/master/text/0281-es5-getters.md)

  In this application we are running a Canary build of Ember which will
  eventually become 3.2.  In 3.2 of Ember.js es5 getters are automatically
  installed for computed properties onto the Object prototype.  So you can use
  `this.myComputedProperty` without reaching for the `get` helper

* No jQuery!

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

* `yarn lint:hbs`
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
bundle install
bundle exec rake
```

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
