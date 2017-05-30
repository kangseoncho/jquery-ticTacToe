//bring in the model to use on this file
const User = require('./userModel');
const path = require('path');

const userController = {
    //for finding all users in DB
    getAllUser(req, res) {
        User.find({}, (err, result) => {
            if (err) return res.send('did not find any users');
            return res.status(200).json(result);
        })
    },

    //for posting a new user into the DB
    createUser(req, res, next) {
        console.log("i am req.body: ", req.body)
        User.create(req.body, (err, result) => {
            if (err) {
                return res.redirect('/');
            } else {
                return res.redirect('/game');
            }
        })
    },

    //get one user from DB then verify to see if that person is in the DB
    verifyUser(req, res) {
        User.findOne({username: req.body.username}, (err, result) => {
            if (req.body.password !== result.password) {
                return res.redirect('/');
            } else {
                //should be redirecting to home page '/'
                return res.redirect('/game');
            }
        })
    }
};

//export userController object for use
module.exports = userController;