import Ember from 'ember';
import layout from './template';

const { inject } = Ember;

export default Ember.Component.extend({
  origami: inject.service(),
  layout,
  classNames: ['origami-index']
});
