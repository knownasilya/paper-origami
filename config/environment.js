/* eslint-env node */
'use strict';

module.exports = function(environment/*, appConfig */) {
  var ENV = {};

  if (environment === 'production') {
    ENV.rootURL = '/milligram-app';
    ENV.locationType = 'hash';
  }

  return ENV;
};
