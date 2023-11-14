// const sentence = "hello world"

// module.exports = {
//     sentence
// }

function isPalindrom(word) {
    let wordle = word
    let reverseWord = wordle.split('').reverse().join('');
    return reverseWord === word;
};





const forbiddenWords = ['nuls', 'nul', 'imbécile', 'imbeciles', 'idiots', 'idiot', 'débile', 'debiles'];

function containForbiddenWords(message) {

    const msg=message.split(' ');
    let result = [];
    for (let index = 0; index < msg.length; index++) {
        const item = msg[index];
        if (forbiddenWords.includes(item)) {
            result.push(item);
        }

      
    }  
    if (result.length > 0) {
            return true;
        }
        return false;
}



module.exports = {
    isPalindrom,
    containForbiddenWords
}