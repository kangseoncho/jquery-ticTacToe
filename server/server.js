const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 8888;

//connect mongoose with server
require('./mongoose.js');
const userController = require('./userdb/userController');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//serve html, js, and css files
app.use('/', express.static(__dirname + './../public/loginPage'));
app.use('/game', express.static(__dirname + './../public/game'));

//only here to make redirect work
app.get('/', (req, res) => { return });
app.get('/game', (req, res) => { return });

//testing route to see if i can access users.
app.get("/users", userController.getAllUser);

//put into DB a new user
app.post('/register', userController.createUser);

//verify a existing user with DB
app.post('/verify', userController.verifyUser);


app.listen(port, () => {
    console.log(__dirname);
    console.log(`listening on port ${port}`);
})