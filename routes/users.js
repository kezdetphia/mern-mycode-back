const express = require("express");

const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

// all routes start with /api/users
app.use("/signup", signUp);
app.use("/login", login);

module.exports = router;
