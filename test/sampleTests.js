define(['chai', 'sample-answers'], function(chai, answers) {
    describe('Basic setup', function() {
        it('should have loaded the answers', function() {
            var assert = chai.assert;
            assert.typeOf(answers, 'object', 'answers should be an object');
            assert.typeOf(answers.foo, 'function', 'answers.foo should be a function');
			assert.equal(answers.foo(), 'foo', 'answers.foo() should return "foo"');
        });
    });
});
