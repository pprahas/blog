const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("HW7 db connected"))
  .catch((err) => console.log("HW7 db not connected"));

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

const createPost = require("./routes/create_post");
app.use("/blog", createPost);

const port = 9090;

const server = app.listen(port, () => console.log("Server is running"));
