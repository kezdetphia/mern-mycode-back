const express = require("express");


const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

// all routes start with /api/users
router.get("/signup", signupUser);
router.get("/login", loginUser);

module.exports = router;
