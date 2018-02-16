import Route from '@ember/routing/route';
import Schedule from 'emberconf/lib/data';

export default Route.extend({
  model() {
    return Schedule;
  }
});
