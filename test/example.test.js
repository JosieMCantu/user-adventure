// IMPORT MODULES under test here:
import { scorePeace } from '../results/score-peace.js';

const test = QUnit.test;

test('scorePeace should take in a number and return a string', (expect) => {
    //Arrange
    const peace = 75;
    // Set up your arguments and expectations
    const expected = 'healthy';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = scorePeace(peace);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('scorePower should take in a number and return a string', (expect) => {
    //Arrange
    const power = 25;
    // Set up your arguments and expectations
    const expected = 'frail';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = scorePeace(power);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
