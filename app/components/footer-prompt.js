import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class extends Component {
  @service fastboot;

  get isDismissed() {
    if (this.fastboot.isFastBoot) {
      return true;
    } else {
      return document.cookie.split(';').indexOf('isDismissed=true')  >= 0;
    }
  }

  set isDismissed(value) {
    if (!this.fastboot.isFastBoot) {
      document.cookie = 'isDismissed=true';
    }
    return value;
  }
}
