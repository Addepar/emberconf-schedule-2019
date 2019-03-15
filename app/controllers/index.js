import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'emberconf/config/environment';
import moment from 'moment';

export default class extends Controller {
  @service fastboot;

  @tracked now = null;

  @alias('model') days;

  get isDebug() {
    return !this.fastboot.isFastBoot && window.location.search.includes('debug');
  }

  get secondsInDay() {
    let nowTime = moment(this.now).utcOffset(ENV.APP.UTC_OFFSET).format('H:mm:ss');
    return moment.duration(nowTime).asSeconds();
  }
  set secondsInDay(seconds) {
    // Use range slider seconds with Day 1 for debug
    let time = moment('2019-01-01').startOf('day').seconds(seconds).format('HH:mm:ss');
    this._setFakeDayOne(time);
    return seconds;
  }

  _setFakeDayOne(time) {
    this.now = `2019-03-19T${time}${ENV.APP.UTC_OFFSET}`;
  }

  _setNow() {
    if (ENV.APP.shouldForceDayOne) {
      // Use local clock time with Day 1 for local development
      let time = moment().format('HH:mm:ss');
      this._setFakeDayOne(time);
    } else {
      // Use real date and time for non-dev environments
      this.now = moment().utcOffset(ENV.APP.UTC_OFFSET).format();
    }

    if (!ENV.APP.shouldUpdateTime || this.fastboot.isFastBoot || this.isDebug) {
      return;
    }

    window.setTimeout(() => {
      if (this.isDestroying) { return; }
      this._setNow();
    }, 10000);
  }

  constructor() {
    super(...arguments);
    this._setNow();
  }
}
