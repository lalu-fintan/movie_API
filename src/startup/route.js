const express = require("express");
const authRouter = require("../routers/authRouter");
const genreRoutes = require("../routers/genreRouter");
const error = require("../middleware/error");

module.exports = (app) => {
  app.use(express.json());
  app.use("/api", authRouter);
  app.use("/geners", genreRoutes);
  app.use(error);
};
