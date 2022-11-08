const express = require("express");
const router = express.Router();
const Post = require("../models/PostModel");
const mongoose = require("mongoose");

router.use(express.json());

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

router.post("/create-post", async (req, res) => {
  // current timestamp in milliseconds
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  let todayDate = month + "/" + date + "/" + year;

  try {
    const postData = req.body;

    const newPost = new Post(
      {
        _id: new mongoose.Types.ObjectId(), // not part of request
        topics: postData.topics,
        date: todayDate,
        title: postData.title,
        content: postData.content,
      },
      { timestamps: true }
    );

    await newPost.save();

    return res.status(200).json({ msg: "Post created successfully." });
  } catch (error) {
    return res.status(500).json({ msg: "Post creation failed." });
  }
});

module.exports = router;
