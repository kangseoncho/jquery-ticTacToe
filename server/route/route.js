//require the controller, which has functions for creating, verifying, getting, etc...
const userController = require('./../userdb/userController');

module.exports = (app) => {
    //testing route to see if i can access users.
    app.get("/users", userController.getAllUser);

    //put into DB a new user
    app.post('/register', userController.createUser, (req, res) => {
        res.status(200).send("finished");
    });

    //verify a existing user with DB
    app.post('/verify', userController.verifyUser);
}