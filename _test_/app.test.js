// // const app = require('../app.js');

// // describe('test',() => {
// //     it('should retrieve a sentence',() => {

// //         expect(app.sentences.length).toBeGreaterThan(0);
// //     });


// });


const app = require('../app.js');

describe('Palindrom',() => {
    it('should be a Palindrom',() => {
        expect(app.isPalindrom('kayak')).toEqual(true);
    });
});


describe('moderator',() => {
    it('contient des mots interdits',() => {
        expect(app.containForbiddenWords('vous etes des nuls')).toEqual(true);
    });
    it.todo('test suivant à réaliser');
    it.todo('test à réaliser plus tard');
})

