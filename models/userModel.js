const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const validator = require('validator')


const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps:true,
}
)

// Static signup method
// -Mongoose model statics is a custom function that can be called just like create etc...
// -Applies to the whole model rather than a specific instance
userSchema.statics.signup = async function(email, password){

  // validaton(using validator package)
  if (!email || !password) throw Error('All fields must be filled');
  if (!validator.isEmail(email)) throw Error('Invalid email')
  if (!validator.isStrongPassword(password)) throw Error('Password not strong enough')

  // check database for existing email
  const emailExists = await this.findOne({email})
  if (emailExists) throw Error('Email is already registered')

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  //Create the user in the database 
  const user = await this.create({email, password: hash})

  return user
}


module.exports = mongoose.model("User", userSchema);