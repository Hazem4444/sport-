const express = require('express');
const router =express.Router();
//import match model 
const Match = require('../models/match');

// Business logic : get all matches
router.get("/", (req, res) => {
    console.log('Here into business logic of get all matches');
    Match.find((err, docs) => {
        if (err) {
            console.log('error with DB', err);

        } else {

            res.status(200).json({
                result: docs
            });

        }
    })

});

// business logic to add match 
router.post("/", (req, res) => {
    console.log('here into add match', req.body);
    const matchObj = new Match({
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,

    });
    matchObj.save((err, result) => {
        console.log('here result', result);
        if (err) {
            console.log('here err', err);
        } else {
            res.status(200).json({
                message: 'Added with succes'

            })
        }
    });

    // matches.push(req.body);


});

//business logic to get match by id 
router.get("/:id", (req, res) => {
    console.log('Here into business logic of get  matches by id', req.params.id);
    Match.findOne({ _id: req.params.id }).then(
        (data) => {
            console.log('here finded match ', data);
            if (data) {
                res.status(200).json({
                    result: data
                });

            }
        }
    );


});

//business logic to delete match by id 
router.delete("/:id", (req, res) => {
    console.log('here into delete by id', req.params.id);
    Match.deleteOne({ _id: req.params.id }, (err, result) =>
        (data) => {
            console.log('here data after delete ', data);
            if (data.deletedCount == 1) {
                res.status(200).json({
                    message: 'deleted with success'
                });

            } else {
                console.log('error into delete');
                res.status(200).json({
                    message: 'error with id'
                })
            }
        }
    )






});

//edit match 
router.put("/:id", (req, res) => {
    console.log('Here into business logic matches by id', req.params.id);
    console.log('Here into business logic matches by obj ', req.body);
    Match.updateOne({ _id: req.params.id }, req.body).then(
        (data) => {
            console.log('here data after edit ', data);
            res.status(200).json({
                message: 'edited  with success'

            });


        }
    )

});
module.exports = router;