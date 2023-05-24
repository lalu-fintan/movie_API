const express = require("express");

const { getGeneres, createGenres } = require("../controllers/generes");

const router = express.Router();

router.get("/", getGeneres);
router.post("/", createGenres);

module.exports = router;
