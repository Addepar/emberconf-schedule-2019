import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { setupRouter, reset } from 'ember-app-scheduler';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  init() {
    this._super(...arguments);
    setupRouter(this);
  },

  destroy() {
    reset();
    this._super(...arguments);
  }
});

Router.map(function() {
});

export default Router;
