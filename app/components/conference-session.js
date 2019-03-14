import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'emberconf/config/environment';
import moment from 'moment';

export default class extends Component {
  @tracked isExpanded = false;

  @computed('args.session.name')
  get isBreak() {
    return ['Lunch', 'Snack Break'].includes(this.args.session.name);
  }

  @computed('args.{now,session.start,session.end}')
  get isNow() {
    return moment(this.args.now).isBetween(this.args.session.start, this.args.session.end, null, '[)');
  }

  @computed('args.{now,session.end}')
  get isPast() {
    return moment(this.args.now).isSameOrAfter(this.args.session.end);
  }

  @computed('args.session.{start,end}')
  get formattedTime() {
    let startMoment = this._pdxMoment(this.args.session.start);
    let endMoment = this._pdxMoment(this.args.session.end);
    let startFormat = (startMoment.format('a') === endMoment.format('a')) ? 'h:mm' : 'h:mma';
    return `${startMoment.format(startFormat)}-${endMoment.format('h:mma')}`;
  }

  _pdxMoment(timestamp) {
    return moment(timestamp).utcOffset(ENV.APP.UTC_OFFSET);
  }

  @action
  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}
