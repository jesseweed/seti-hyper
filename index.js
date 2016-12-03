exports.decorateConfig = config => {
  return Object.assign({}, config, require('./lib/seti')(config))
}
