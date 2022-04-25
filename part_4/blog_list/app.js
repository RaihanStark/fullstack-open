const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config");

// Models
const Blog = require("./models/blog");

// Controllers
const blogsRouter = require("./controllers/blogs");

// Initiate Mongoose
mongoose
  .connect(config.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Router
app.use("/api/blogs", blogsRouter);

module.exports = app;
