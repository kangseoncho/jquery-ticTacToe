//require in parts for accessing mongoose and making Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {type: String},
    password: {type: String},
    turnToVictory: {type: Number}
})

module.exports = mongoose.model('User', userSchema);