import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Schedule from 'emberconf/libs/data';
import SmoothScroll from 'emberconf/libs/smoothscroll';
import { whenRoutePainted } from 'ember-app-scheduler';

export default class extends Route {
  @service fastboot;

  model() {
    return Schedule;
  }

  activate() {
    super.activate(...arguments);
    if (this.fastboot.isFastBoot) { return; }

    // Scroll to current/upcoming sessions
    whenRoutePainted().then(() => {
      SmoothScroll.polyfill();
      let header = document.querySelector('header');
      let pastSessions = document.getElementsByClassName('is-past');
      if (pastSessions.length) {
        let pastSession = pastSessions[pastSessions.length-1];
        let topScrollSession = (header.offsetHeight > pastSession.offsetHeight) ? pastSessions[pastSessions.length-2] : pastSession;
        topScrollSession.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    });
  }
}
