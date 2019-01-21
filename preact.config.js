const preactCliLodash = require('preact-cli-lodash');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function(config, env, helpers) {
  /** you can change config here **/
  config = preactCliLodash(config, {
    collections: true,
    paths: true
  });

  const {
    rule
  } = helpers.getLoadersByName(config, 'babel-loader')[0];

  rule.options.plugins.push('transform-regenerator');
  rule.options.plugins.push(['transform-runtime', {
    helpers: false,
    polyfill: false,
    regenerator: true
  }]);

  return config;
}
