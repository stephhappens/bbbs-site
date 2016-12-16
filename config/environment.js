/* jshint node: true */

module.exports = function (environment) {
  const ENV = {
    moment: {
      includeTimezone: '2010-2020'
    },
    DS: {
      host: 'http://localhost:3333',
      namespace: 'api',
    },
    modulePrefix: 'bbbs-site',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-simple-auth': {
      authorizer: 'authorizer:token',
      authenticationRoute: 'index'
    },

    'ember-simple-auth-token': {},
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.DS.host = 'https://bbbs-api.herokuapp.com';
  }

  ENV['ember-simple-auth-token'].serverTokenEndpoint = `${ENV.DS.host}/api/token-auth`;

  return ENV;
};
