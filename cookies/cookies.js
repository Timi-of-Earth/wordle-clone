const express = require('express');
const router = express.Router();


// router.route('/').get((req, res, next) => {
//     if (req.cookies) {
//         res.send(req.cookies);
//     } else {
//         res.cookie(`played`, 0);
//         res.send('Cookie added');
//     }
// });


router.get('/', (req, res) => {
    console.log('true');
    if (req.cookies) {
        res.send(req.cookies);
    } else {
        res.cookie(`played`, 0);
        res.send(`cookie added`);
    }
});


module.exports = router;