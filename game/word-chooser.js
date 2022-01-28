const Word = require('../game/db/models/word');
//import wordToday from './db/db';

global.word = 'crack';

const chooseWord = async () => {
    const count = await Word.estimatedDocumentCount();
    //console.log(count);
    const random = Math.floor(Math.random() * count);

    const item = await Word.findOne().skip(random);
    global.word = item.word;
    console.log(word);

    setTimeout(chooseWord, 1000 * 60 * 60 * 24);
};

// chooseWord();setInterval(() => {
//     chooseWord()
// }, 5000);

/*(async () => {
    const wordOfTheDay = await chooseWord();
 })()

console.log(wordOfTheDay);*/

module.exports = chooseWord;