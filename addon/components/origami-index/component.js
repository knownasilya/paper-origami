import { inject as service } from '@ember/service';
import $ from 'jquery';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from './template';

export default Component.extend({
  origami: service(),
  router: service(),
  layout,
  classNames: ['origami-index'],

  nextNavigation: computed('router.currentRouteName', 'origami.navigation', {
    get() {
      let currentRouteName = this.get('router.currentRouteName');
      let navigation = this.get('origami.navigation');
      let current = navigation.findBy('route', currentRouteName);
      let currentIndex = navigation.indexOf(current);

      return navigation.length > currentIndex ? navigation.objectAt(currentIndex + 1) : undefined;
    }
  }),

  actions: {
    transitionTo(...args) {
      let last = args[args.length - 1];
      
      if (last instanceof $.Event) {
        args = args.slice(0, -1);
      }
      
      this.get('router').transitionTo(...args);
    }
  }
});
