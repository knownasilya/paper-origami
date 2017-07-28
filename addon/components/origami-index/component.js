import Ember from 'ember';
import layout from './template';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  origami: inject.service(),
  router: inject.service(),
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
      
      if (last instanceof Ember.$.Event) {
        args = args.slice(0, -1);
      }
      
      this.get('router').transitionTo(...args);
    }
  }
});
