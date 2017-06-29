import Ember from 'ember';
import layout from './template';

const { inject } = Ember;

export default Ember.Component.extend({
  router: inject.service(),
  origami: inject.service(),
  layout,
  classNames: ['paper-origami'],

  didReceiveAttrs() {
    let navigation = this.get('navigation');
    let title = this.get('title');
    let slogan = this.get('slogan');

    this.get('origami').setProperties({
      navigation,
      title,
      slogan
    });
  },

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
