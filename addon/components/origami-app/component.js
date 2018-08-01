import { inject as service } from '@ember/service';
import $ from 'jquery';
import Component from '@ember/component';
import { A } from '@ember/array';
import layout from './template';

export default Component.extend({
  router: service(),
  origami: service(),
  layout,
  classNames: ['paper-origami'],

  didReceiveAttrs() {
    let navigation = A(this.get('navigation'));
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

      if (last instanceof $.Event) {
        args = args.slice(0, -1);
      }
      
      this.get('router').transitionTo(...args);
    }
  }
});
