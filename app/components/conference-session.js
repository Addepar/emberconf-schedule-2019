import Component from '@ember/component';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';
import { computed } from '@ember/object';
import moment from 'moment';

const TIME_FORMAT = 'h:mm a';

export default Component.extend(RecognizerMixin, {
  recognizers: 'tap',

  classNames: ['session'],
  classNameBindings: ['isBreak', 'isExpanded'],

  isExpanded: false,
  session: null,

  isBreak: computed('session.name', function() {
    return ['Lunch', 'Snack Break'].includes(this.get('session.name'));
  }),

  formattedStart: computed('session.start', function() {
    return moment(this.get('session.start')).utcOffset('-07:00').format(TIME_FORMAT);
  }),

  formattedEnd: computed('session.end', function() {
    return moment(this.get('session.end')).utcOffset('-07:00').format(TIME_FORMAT);
  }),

  tap() {
    this.toggleProperty('isExpanded');
  }
});
