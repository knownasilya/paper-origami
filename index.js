/* eslint-env node */
'use strict';

module.exports = {
  name: 'milligram-app',

  included: function() {
    this._super.included.apply(this, arguments);
    this.import('vendor/milligram.css');
    this.import('vendor/milligram-app/style.css');
  }
};
