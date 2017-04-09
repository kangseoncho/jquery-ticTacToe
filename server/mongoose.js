const mongoose = require('mongoose');

//new mLab link by Alex
const mongoUrl = 'mongodb://tictactoe:tictactoe@ds155820.mlab.com:55820/jquery-tic-tac-toe-db';

mongoose.connect(mongoUrl, function () {
  // WARNING: every connection will drop database, comment this out when ready to deploy
   //mongoose.connection.db.dropDatabase();
});
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});