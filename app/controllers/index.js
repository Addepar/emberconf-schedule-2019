import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { later } from '@ember/runloop';
import moment from 'moment';

export default Controller.extend({
  days: alias('model'),

  now: null,

  _setNow() {
    // FIXME: Force Day 1 date with local clock time for testing
    let localTime = moment().format('HH:mm:ss');
    this.set('now', moment(`2018-03-13T${localTime}-07:00`).format());

    later(this, function() {
      this._setNow();
    }, 1000);
  },

  init() {
    this._super(...arguments);
    this._setNow();
  }
});
