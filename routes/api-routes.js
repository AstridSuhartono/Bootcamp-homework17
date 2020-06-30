
const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/api/workouts", function (req, res) {
    db.Workout.find({}).sort({ day: 1 })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        });
});

router.post(`/api/workouts`, function (req, res) {
    db.Workout.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", function (req, res) {
    db.Workout.updateOne(
        {
            _id: req.params.id,
            updated_exercise: req.body
        },
        {
            $push: { exercises: updated_exercise }
        },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
});

router.get("/api/workouts/range", function(req, res) {

});

module.exports = router