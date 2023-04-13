const withTM = require('next-transpile-modules')([
    '@ts-monorepo/ui'
])

module.exports = withTM({})
