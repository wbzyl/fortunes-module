var should = require('should')
var fortunes = require('../lib/main')

describe('fortunes module', function() {
  describe('with no arguments', function() {
    it('returns a random quote', function() {
      var result = fortunes()
      result.should.not.be.empty
    })
  })
})
