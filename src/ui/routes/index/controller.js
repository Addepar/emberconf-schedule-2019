import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import ENV from 'emberconf/config/environment';
import moment from 'emberconf/src/libs/moment';

export default Controller.extend({
  fastboot: service(),

  days: alias('model'),

  now: null,

  _setNow() {
    // FIXME: Force Day 1 date with Portland clock time for testing
    let localTime = moment().utcOffset(ENV.APP.UTC_OFFSET).format('HH:mm:ss');
    this.set('now', moment(`2018-03-13T${localTime}${ENV.APP.UTC_OFFSET}`).format());

    if (this.get('fastboot.isFastBoot')) { return; }

    later(this, function() {
      this._setNow();
    }, 1000);
  },

  init() {
    this._super(...arguments);
    this._setNow();
  }
});
