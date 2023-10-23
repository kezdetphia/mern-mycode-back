const mongoose = require('mongoose')
const User = require('../models/userModel')



// signup user
const signupUser = async()=>{
  res.json({mssg: 'signup'})
}
  
  
  
  // login user
  const loginUser = async()=>{
  res.json({mssg: 'login'})
  }



  module.exports = {
    signupUser,
    loginUser
  }