/* eslint-env node */
'use strict';

module.exports = {
  name: 'paper-origami',

  included: function() {
    this._super.included.apply(this, arguments);
    this.import('vendor/milligram.css');
    this.import('vendor/paper-origami/style.css');
  }
};
