'use strict'

var debug = require('debug-log')('mockbin')

module.exports = function (req, res, next) {
  this.client.keys('bin:*', function (err, keys) {
    if (err) {
      debug(err)

      throw err
    }

    res.view = 'bin/list'
    res.body = {
      bins: keys
    }

    next()
  })
}
