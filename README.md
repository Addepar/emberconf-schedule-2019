# EmberConf Schedule

[![TravisCi](https://travis-ci.org/201-created/emberconf-schedule-2018.svg?branch=master)](https://travis-ci.org/201-created/emberconf-schedule-2018)

_This tech demo is brought to you via the EmberConf sponsorship from [Addepar](https://addepar.com/careers/)._

## Features

### 2019

* Ember Octane
  * [Native Classes](https://blog.emberjs.com/2019/02/11/coming-soon-in-ember-octane-part-1.html)
  * [Angle Brackets & Named Arguments](https://blog.emberjs.com/2019/02/19/coming-soon-in-ember-octane-part-2.html)
  * [Tracked Properties](https://blog.emberjs.com/2019/02/26/coming-soon-in-ember-octane-part-3.html)
  * [Element Modifiers](https://blog.emberjs.com/2019/03/06/coming-soon-in-ember-octane-part-4.html)
  * [Glimmer Components](https://www.pzuraq.com/coming-soon-in-ember-octane-part-5-glimmer-components/)

### 2018

* [Progressive Web App](https://madhatted.com/2017/6/16/building-a-progressive-web-app-with-ember)
* [Fastboot Rehydration](https://github.com/glimmerjs/glimmer-vm/commit/316805b9175e01698120b9566ec51c88d075026a)
* [ES5 Getters](https://emberjs.github.io/rfcs/0281-es5-getters.html)
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
