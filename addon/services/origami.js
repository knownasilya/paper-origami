import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  router: service(),

  page: computed('router.currentRouteName', 'navigation', {
    get() {
      let currentRouteName = this.get('router.currentRouteName');
      let navigation = this.get('navigation');
      let pages = navigation.filter((item) => item.route === currentRouteName);

      return pages.length ? pages[0] : undefined;
    }
  })
});
