const express = require("express");

const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

// all routes start with /api/users

// signup route
router.post("/signup", signupUser);


// login route
router.post("/login", loginUser);

module.exports = router;
