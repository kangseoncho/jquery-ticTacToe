const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//connect mongoose with server
require('./mongoose.js');

app.use(bodyParser.json());
//serve html, js, and css files
app.use(express.static(__dirname + './../public/loginPage'));

//app.disable('etag');

//linked routes (after middlewares) for modularity
require('./route/route.js')(app);

//houses all my tic-tac-toe stuff. will be redirected her after signup and/or verification... does not work 
// app.get('/game', (req, res) => {
//     console.log('lets play');
//     res.sendFile(path.join(__dirname, '../game/ticTacToe.html'), {cacheControl: false, lastModified: false}, (err) => {
//         console.log(res.statusCode);
//         if (err) console.log(err);
//         else {
//             console.log('i am working');
//         }
//     });
//     //res.json({username: 'username', password: 'password'});
// })

app.listen(8888, () => {
    console.log(path.join(__dirname, '../game/ticTacToe.html'));
    console.log('listening on port 8888');
})