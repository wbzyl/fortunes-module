var should = require('should');
var xxx = require('../lib/main');

describe('xxx', function() {
  describe('with no arguments', function() {
    it('returns an empty array', function() {
      var result = xxx();
      result.should.eql([]);
    });
  });
});
