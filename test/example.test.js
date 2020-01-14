// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from '../isYes.js';
const test = QUnit.test;

QUnit.module("Test for isYes");

test('YES, y, ya, should be true', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const input = 'Ya';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
