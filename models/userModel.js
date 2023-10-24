const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

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


// Mongoose model statics is a custom function that can be called just like create etc...
//In this snipept it secures the password
// Applies to the whole model rather than a specific instance
userSchema.statics.signup = async({email, password})=>{
  const emailExists = this.findOne(email)

  if (emailExists) throw Error('Email is already registered')

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const user = await this.create({email, password: hash})

  return user
}


module.exports = mongoose.model("User", userSchema);