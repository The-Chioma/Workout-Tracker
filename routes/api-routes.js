const Workout = require("../models/workout");
const router = require("express").Router();

  router.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((info) => {
        res.json(info);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post("/api/workouts",function (req,res){    
    Workout.create({})
    .then(info => res.json(info))
    .catch(err => { 
        res.json(err)
    })
});

  router.get("/api/workout/range", function (req, res) {
    Workout.find()
      .then((info) => {
        res.json(info);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post("/api/workouts/range",function (req,res){    
    Workout.create({})
    .then(info => res.json(info))
    .catch(err => { 
        res.json(err)
    })
});

  router.put("/api/workout/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    ).then(info => {
        res.json(info)
    })
    .catch(err => {
        res.json(err)
    })
  });

module.exports = router;