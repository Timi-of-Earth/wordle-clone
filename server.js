const express = require('express');
const app = express();
const connectDB = require('./game/db/dbconnect');
const { mongo } = require('mongoose');
require('dotenv').config();
const play = require('./game/game');
//const Word = require('./game/db/models/word');
const chooseWord = require('./game/word-chooser');

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded());


//Routes

app.use('/play', play);




const port = 2000;



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI).then(() => console.log('CONNECTED TO DB...')).then(chooseWord());
        app.listen(port, console.log(`Listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    };
} 

start();