var should = require('should')
var fortunes = require('../lib/main')

describe('fortunes module', function() {
  it('calls the callback', function(done) {
    fortunes(function(result) {
      result.should.not.have.length(0)
      done()
    })
  })
})
