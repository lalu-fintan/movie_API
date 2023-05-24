const { default: mongoose } = require("mongoose");
const genreModel = require("../model/genersModel");
// const asyncHandler = require("../middleware/asyncMiddleware");
const asyncHandler = require("express-async-handler");

const getGeneres = asyncHandler(async (req, res, next) => {
  const genere = await genreModel.find();
  res.status(200).json(genere);

  //   res.send("hello");
});

const getGeneresById = asyncHandler(async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("invalid ID");
  }
  const genere = await genreModel.findById(req.params.id);
  if (!genere) {
    res.status(404).send("The id is not avilable");
  }
  res.status(200).json(genere);
});

const createGenres = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).send("name is required");
  }
  const genre = await genreModel.create({
    name,
  });

  res.status(200).send(genre);
  // res.status(500).send(err);
});

module.exports = { getGeneres, createGenres };
