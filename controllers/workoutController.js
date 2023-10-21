//import the model
const Workout = require('../models/workoutModel') 
const mongoose = require('mongoose')


// GET all workouts
const getAlWorkouts = async(req,res)=>{
  try{
    const workouts = await Workout.find({}).sort({createdAt: -1}) //empty curly brace is essential in find func
    res.status(200).json(workouts)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

// GET one workout
const getOneWorkout = async(req,res)=>{
  const {id} = req.params
  try{
    const workout = await Workout.findById(id)
    res.status(200).json(workout)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}



// POST new workout
const createWorkout = async(req,res)=>{
  const {title, reps, load} = req.body
  try{
    const workout = await Workout.create({title, reps, load})
    res.status(200).json(workout)
    console.log(`A new workout is successfully saved to the database`)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

//UPDATE workout
const updateWorkout = async(req,res)=>{
  const {id} = req.params
  const {title, reps, load} = req.body
  const update = {
    $set: {
      title: title,
      reps: reps,
      load:load
    }
  }
  try{
    const workout = await Workout.findByIdAndUpdate(id, update, {new:true})
    res.status(200).json(workout)
    console.log('Workout is updated')
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

// DELETE a workout
const deleteWorkout = async(req,res)=>{
  const {id} = req.params
  try{
    const workout = await Workout.findByIdAndDelete(id)
    res.status(200).json(workout)
    console.log(`${id} has been deleted`)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

//export functions and import them to routes
module.exports = {
  createWorkout,
  getAlWorkouts,
  updateWorkout,
  deleteWorkout,
  getOneWorkout,
};



