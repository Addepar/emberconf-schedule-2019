import Component from '@glimmer/component';
import moment from 'moment';

export default class extends Component {

  get title() {
    let dayNumber = this.args.index + 1;
    let formattedDate = moment(this.args.day.date).format('MMMM D');
    return `Day ${dayNumber}: ${formattedDate}`;
  }
}
