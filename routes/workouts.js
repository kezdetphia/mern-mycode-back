const express = require('express')

// destructuring and importing functions from controllers
const {
  createWorkout,
  getAlWorkouts,
  updateWorkout,
  deleteWorkout,
  getOneWorkout,
} = require("../controllers/workoutController");

//import workout model to be able to manipulate the schema/db
const Workout = require('../models/workoutModel')

const router = express.Router()


//All route starts with api/workouts/...
//
//GET all workouts
router.get('/', getAlWorkouts)

//GET a single workout
router.get('/:id', getOneWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workouut
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);



module.exports = router