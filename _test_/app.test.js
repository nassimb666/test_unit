const app = require('../app.js');

describe('test',() => {
    it('should retrieve a sentence',() => {

        expect(app.sentences.length).toBeGreaterThan(0);
    });


});