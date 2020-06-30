
const express = require("express");
const db = require("../models");
const router = express.Router();

router.post(`/api/workouts`, function (req, res) {
    db.Workout.create(req.body)
        .then(data => {
            res.json(data)
        })
})

module.exports = router