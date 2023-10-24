const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Helper functions
const createToken = (_id)=>{
  // sign arguments: payload(_id),secret,options
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'})
}

// Client functions

// signup user
const signupUser = async (req,res) => {
  const {email, password} = req.body

  try{
    // get validated user back from Schema.statics func
    const user = await User.signup(email, password);

    // create token
    // return signed jwt token from helper func above
    const token = createToken(user._id)

    //send data to client with email and signed token
    res.status(200).json({email, token})

  }catch(error){
    res.status(400).json({error: error.message})
  }
};

// login user
const loginUser = async (req,res) => {
  res.json({ mssg: "login" });
};

module.exports = {
  signupUser,
  loginUser,
};
