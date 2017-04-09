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
                return res.status(400).send('failed to create new user')
            } else {
                res.status(200).json(result);
            }
        })
    },

    //get one user from DB then verify to see if that person is in the DB
    verifyUser(req, res) {
        User.findOne({username: req.body.username}, (err, result) => {
            if (req.body.password !== result.password) {
                return res.status(400).send('wrong username/password');
            } else {
                //should be redirecting to home page '/'
                //res.redirect('/');
            }

        })
    }
};


//export userController object for use
module.exports = userController;