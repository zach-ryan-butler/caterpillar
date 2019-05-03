import feedCaterpillar from '../src/feed-Caterpillar.js';

const test = QUnit.test;

test('add child script to parent div', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const fruitName = 'apple';
    const mockCaterpillar = document.createElement('div');
    const expected = '<span class="part apple"></span>';


    //Act 
    // Call the function you're testing and set the result to a const
    feedCaterpillar(mockCaterpillar, fruitName);

    //Assert
    assert.equal(mockCaterpillar.innerHTML, expected);
});

