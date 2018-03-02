import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Schedule from 'emberconf/lib/data';

export default Route.extend({
  fastboot: service(),
  scheduler: service(),

  model() {
    return Schedule;
  },

  afterModel() {
    if (this.get('fastboot.isFastBoot')) { return; }

    this.get('scheduler').scheduleWork('afterContentPaint', () => {
      // Scroll second-to-last finished session to top to ensure upcoming sessions are visible
      let pastSessions = document.getElementsByClassName('is-past');
      pastSessions[pastSessions.length-2].scrollIntoView(true);
    })
  }
});
