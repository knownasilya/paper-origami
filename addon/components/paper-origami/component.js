import Ember from 'ember';
import layout from './template';

const { inject } = Ember;

export default Ember.Component.extend({
  router: inject.service(),
  layout,
  classNames: ['paper-origami'],

  actions: {
    transitionTo() {
      this.get('router').transitionTo(...arguments);
    }
  }
});
