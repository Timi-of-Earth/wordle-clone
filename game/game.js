const express = require('express');
const router = express.Router();
const gameLogic = require('./game-logic')





router.get('/:answer', gameLogic);


module.exports = router;