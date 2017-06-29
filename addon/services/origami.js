import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Service.extend({
  router: inject.service(),

  page: computed('router.currentRouteName', 'navigation', {
    get() {
      let currentRouteName = this.get('router.currentRouteName');
      let navigation = this.get('navigation');
      let pages = navigation.filter((item) => item.route === currentRouteName);

      return pages.length ? pages[0] : undefined;
    }
  })
});
