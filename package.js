Package.describe({
  name: 'othermachines:accounts-role-manager',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.mainModule('accounts-role-manager.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('cultofcoders:mocha');
  api.use('practicalmeteor:chai');
  api.use('othermachines:accounts-role-manager');
  api.addFiles('accounts-role-manager-tests.js', 'client');
  api.addFiles('accounts-role-manager-tests.js', 'server');
});
