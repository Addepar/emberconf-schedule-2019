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
    let nowTime;
    let nowMoment = this._pdxMoment(this.now);
    switch (true) {
      case (nowMoment.isBefore('2019-03-19T09:00:00-07:00')):
        nowTime = '09:00:00';
        break;
      case (nowMoment.isAfter('2019-03-19T19:00:00-07:00')):
        nowTime = '19:00:00';
        break;
      default:
        nowTime = nowMoment.format('H:mm:ss');
    }
    return moment.duration(nowTime).asSeconds();
  }
  set secondsInDay(seconds) {
    // Use range slider seconds with Day 1 for debug
    let time = moment('2019-01-01').startOf('day').seconds(seconds).format('HH:mm:ss');
    this._setFakeDayOne(time);
    this._hasSetSeconds = true;
    return seconds;
  }

  _pdxMoment(time) {
    return moment(time).utcOffset(ENV.APP.UTC_OFFSET);
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
      this.now = this._pdxMoment().format();
    }

    if (!ENV.APP.shouldUpdateTime || this.fastboot.isFastBoot) {
      return;
    }

    window.setTimeout(() => {
      if (this._hasSetSeconds || this.isDestroying) { return; }
      this._setNow();
    }, 10000);
  }

  constructor() {
    super(...arguments);
    // this._setNow();
  }
}
