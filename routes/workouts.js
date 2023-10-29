const express = require('express')

// destructuring and importing functions from controllers
const {
  createWorkout,
  getAlWorkouts,
  updateWorkout,
  deleteWorkout,
  getOneWorkout,
} = require("../controllers/workoutController");

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workouts
// call before any route to protect them, makes sure it's authenticated
router.use(requireAuth);

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