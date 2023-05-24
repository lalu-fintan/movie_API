const express = require("express");
const {
  register,
  login,
  currentUser,
} = require("../controllers/authentication");
const authVerify = require("../middleware/authVerify");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", authVerify, currentUser);

module.exports = router;
