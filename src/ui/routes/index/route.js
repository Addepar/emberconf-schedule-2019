import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Schedule from 'emberconf/src/libs/data';
import SmoothScroll from 'emberconf/src/libs/smoothscroll';

export default Route.extend({
  fastboot: service(),
  scheduler: service(),

  model() {
    return Schedule;
  },

  afterModel() {
    if (this.get('fastboot.isFastBoot')) { return; }

    // Scroll to current/upcoming sessions
    this.scheduler.scheduleWork('afterContentPaint', () => {
      SmoothScroll.polyfill();
      let header = document.querySelector('header');
      let pastSessions = document.getElementsByClassName('is-past');
      if (pastSessions.length) {
        let pastSession = pastSessions[pastSessions.length-1];
        let topScrollSession = (header.offsetHeight > pastSession.offsetHeight) ? pastSessions[pastSessions.length-2] : pastSession;
        topScrollSession.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    })
  }
});
