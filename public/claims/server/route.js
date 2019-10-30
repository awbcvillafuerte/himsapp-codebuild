const requireAll = require('require-all')

module.exports = app => {
  const routes = requireAll(`${__dirname}/Routes`)
  for (let route in routes) {
    const r = routes[route]
    app.use(r.basePath, r.Router)
  }
}
