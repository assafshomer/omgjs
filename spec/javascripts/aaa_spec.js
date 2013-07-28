//= require aaa

describe('assaf', function() {
  it('should be equal to input', function() {
    assaf(2).should.eql(2);
    assaf(3).should.not.eql(2);
	});
});