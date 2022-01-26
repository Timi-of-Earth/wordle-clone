const wordToday = require('./db/db');

const gameLogic = (req, res, next) => {
    const answer = req.params.answer;
    const answerArray = answer.split('');
    const result = [];
    answerArray.forEach((element, index) => {
        let letterArray = [];

        //check if the letter is in the word of the day
        if (wordToday.includes(element)) {
            letterArray.push(true);
        } else {
            letterArray.push(false)
        };

        //check if the corresponding position in the word of the day has the same letter 
        if (wordToday[index] === element) {
            letterArray.push(true)
        } else {
            letterArray.push(false);
        };
        result.push(letterArray);

    });

    res.json(result);
};

module.exports = gameLogic;