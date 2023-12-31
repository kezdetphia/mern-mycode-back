const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const passwordValidationOptions = {
  minLength: 6, // Set a lower minimum length
  minLowercase: 0, // Allow passwords with no lowercase letters
  minUppercase: 0, // Allow passwords with no uppercase letters
  minNumbers: 0, // Allow passwords with no numbers
  minSymbols: 0, // Allow passwords with no symbols
  returnScore: false,
};

// -Mongoose model statics is a custom function that can be called just like create etc...
// -Applies to the whole model rather than a specific instance

// Static signup method
userSchema.statics.signup = async function (email, password) {
  // validaton(using validator package)
  if (!email || !password) throw Error("All fields must be filled");
  if (!validator.isEmail(email)) throw Error("Invalid email");
  if (!validator.isStrongPassword(password, passwordValidationOptions))
    throw Error("Password not strong enough");

  // check database for existing email
  const emailExists = await this.findOne({ email });
  if (emailExists) throw Error("Email is already registered");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  //Create the user in the database
  const user = await this.create({ email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("All fields must be filled");
  const user = await this.findOne({ email });
  if (!user) throw Error("Username not found");

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw Error("Incorrect password");

  return user;
};

module.exports = mongoose.model("User", userSchema);
