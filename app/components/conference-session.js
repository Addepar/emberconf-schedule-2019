import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'emberconf/config/environment';
import moment from 'moment';

export default class extends Component {
  @tracked
  isExpanded = false;

  @computed('session.name')
  get isBreak() {
    return ['Lunch', 'Snack Break'].includes(this.args.session.name);
  }

  @computed('now', 'session.{start,end}')
  get isNow() {
    return moment(this.args.now).isBetween(this.args.session.start, this.args.session.end, null, '[)');
  }

  @computed('now', 'session.end')
  get isPast() {
    return moment(this.args.now).isSameOrAfter(this.args.session.end);
  }

  @computed('session.{start,end}')
  get formattedTime() {
    let startMoment = this._pdxMoment(this.args.session.start);
    let endMoment = this._pdxMoment(this.args.session.end);
    let startFormat = (startMoment.format('a') === endMoment.format('a')) ? 'h:mm' : 'h:mma';
    return `${startMoment.format(startFormat)}-${endMoment.format('h:mma')}`;
  }

  _pdxMoment(timestamp) {
    return moment(timestamp).utcOffset(ENV.APP.UTC_OFFSET);
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}
