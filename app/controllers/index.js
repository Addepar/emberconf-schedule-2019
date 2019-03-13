import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'emberconf/config/environment';
import moment from 'emberconf/libs/moment';

export default class extends Controller {
  @service fastboot;

  @tracked now = null;

  @alias('model') days;

  _setNow() {
    if (ENV.APP.shouldForceDayOne) {
      // Use conf Day 1 for development
      let time = moment().utcOffset(ENV.APP.UTC_OFFSET).format('HH:mm:ss');
      this.now = moment(`2019-03-19T${time}${ENV.APP.UTC_OFFSET}`).format();
    } else {
      // Use real date and time for non-dev environments
      this.now = moment().utcOffset(ENV.APP.UTC_OFFSET).format();
    }

    if (!ENV.APP.shouldUpdateTime || this.fastboot.isFastBoot) { return; }

    later(this, function() {
      this._setNow();
    }, 10000);
  }

  constructor() {
    super(...arguments);
    this._setNow();
  }
}
