const Workout = require("../models/workout");
const app = require("express").Router();

  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((info) => {
        res.json(info);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  app.post("/api/workouts",function (req,res){    
    Workout.create({})
    .then(info => res.json(info))
    .catch(error => { 
        res.json(error)
    })
});

  app.get("/api/workouts/range", function (req, res) {
    Workout.find()
      .then((info) => {
        res.json(info);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  app.post("/api/workouts/range",function (req,res){    
    Workout.create({})
    .then(info => res.json(info))
    .catch(error => { 
        res.json(error)
    })
});

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    ).then(info => {
        res.json(info)
    })
    .catch(error => {
        res.json(error)
    })
  });

module.exports = app;