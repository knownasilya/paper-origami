/* eslint-env node */
'use strict';

module.exports = {
  name: 'paper-origami',

  included: function() {
    this._super.included.apply(this, arguments);
    this.import('vendor/paper-origami/style.css');
  },

  contentFor(type) {
    if (type === 'head') {
      return [
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">',
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css">',
        '<link href="css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />'
      ].join('\n');
    }
  }
};
