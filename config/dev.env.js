var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true,
  DEV_TOOLS: true,
  PRODUCTION_TIP: true,
  DEFAULT_LOCALE: '"da"',
  API_URL: '""'
})
