//const wordToday = require('./db/db');
//const wordToday = require('./db/db');

const gameLogic = (req, res, next) => {
    const answer = req.params.answer;
    const answerArray = answer.split('');
    //const wordToday = await wordTodayArray();
    const wordToday = global.word;
    const wordTodayArray = wordToday.split('');
    const result = [];
    answerArray.forEach((element, index) => {
        let letterArray = [];

        //check if the letter is in the word of the day
        if (wordTodayArray.includes(element)) {
            letterArray.push(true);
        } else {
            letterArray.push(false)
        };

        //check if the corresponding position in the word of the day has the same letter 
        if (wordTodayArray[index] === element) {
            letterArray.push(true)
        } else {
            letterArray.push(false);
        };
        result.push(letterArray);

    });

    res.json(result);
};

module.exports = gameLogic;