import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  moment: service(),

  beforeModel() {
    // Globally set time zone to match Portland
    this.get('moment').setTimeZone('America/Los_Angeles');
  }
});
