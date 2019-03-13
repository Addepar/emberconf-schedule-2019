import Component from '@glimmer/component';
import { computed } from '@ember/object';
import moment from 'emberconf/libs/moment';

export default class extends Component {

  @computed('day.date', 'index')
  get title() {
    let dayNumber = this.args.index + 1;
    let formattedDate = moment(this.args.day.date).format('MMMM D');
    return `Day ${dayNumber}: ${formattedDate}`;
  }
}
