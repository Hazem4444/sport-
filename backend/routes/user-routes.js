const express = require('express');
const router = express.Router();
//import user model 
const User = require('../models/user');

// business logic to signup
router.post("/signup", (req, res) => {
    console.log('here into signup', req.body);
    const userObj = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        pwd: req.body.pwd,
    });
    userObj.save((err, result) => {
        console.log('Result after save ', result);
        if (err) {
            console.log('here into save', result);

        } else {
            res.status(200).json({
                message: 'user added with success'
            })
        }
    })
});
// business logic to login 
router.post("/login", (req, res) => {
    console.log('here into login ', req.body);
    User.findOne({ email: req.body.email, pwd: req.body.pwd }).then(
        (result) => {
            console.log('here into login');
        }
    )

})
module.exports = router ;