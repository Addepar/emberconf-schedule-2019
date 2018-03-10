import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'emberconf/src/libs/moment';

export default Component.extend({
  day: null,
  index: 0,

  title: computed('day.date', function () {
    let dayNumber = this.index + 1;
    let formattedDate = moment(this.get('day.date')).format('MMMM D');
    return `Day ${dayNumber}: ${formattedDate}`;
  })
});
