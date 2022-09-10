const withTM = require('next-transpile-modules')([
    '@ts-monorepo/components'
])

module.exports = withTM({})
