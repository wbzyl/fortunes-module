var should = require('should');
var fm = require('../lib/main');

describe('fortunes module', function() {
  describe('with no arguments', function() {
    it('returns a random quote', function() {
      var result = fm();
      result.should.not.be.empty;
    });
  });
});
