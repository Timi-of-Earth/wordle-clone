const express = require('express');
const app = express();
//const connectDB = require('./db/dbconnect');
//const { mongo } = require('mongoose');
//require('dotenv').config();
const play = require('./game/game')

app.use(express.static('./public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded());


//Routes

app.use('/play', play);




const port = 2000;

app.listen(port, console.log(`Listening on port ${port}...`));

/* const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI).then(() => console.log('CONNECTED TO DB...'));
        app.listen(port, console.log(`Listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    };
} 

start();*/