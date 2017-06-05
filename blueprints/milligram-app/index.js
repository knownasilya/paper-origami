/* eslint-env node */
module.exports = {
  name: 'milligram-app',
  description: 'Install milligram css dependency',

  normalizeEntityName: function() {
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addPackageToProject('milligram', '1.3.0');
  }
};
