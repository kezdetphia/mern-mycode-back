const User = require("../models/userModel");

// signup user
const signupUser = async (req,res) => {
  res.json({ mssg: "signup" });
};

// login user
const loginUser = async (req,res) => {
  res.json({ mssg: "login" });
};

module.exports = {
  signupUser,
  loginUser,
};
