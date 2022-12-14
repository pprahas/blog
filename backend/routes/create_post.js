const express = require("express");
const router = express.Router();
const Post = require("../models/PostModel");
const mongoose = require("mongoose");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(res.json(posts));
    // res.send(res.json(posts));
    // res.send(res.json({ hello: "world" }));
    // res.send({ bye: "world" });
  } catch (error) {}
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

    const correctPass = "prado156";

    if (postData.password != correctPass) {
      alert("Incorrect Password");
      return res.status(500).json({ msg: "uh uh" });
    }

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

router.post("/delete-post", async (req, res) => {
  try {
    const id = req.body.id;
    const find = await Post.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Post deleted successfully." });
  } catch (error) {
    return res.status(500).json({ msg: "Post deletion failed." });
  }
});

router.post("/modify-post", async (req, res) => {
  try {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    let todayDate = month + "/" + date + "/" + year;
    const { id, content } = req.body;
    const post = await Post.findById(id);
    post.content = content;
    post.date = todayDate;
    await post.save();
    return res.status(200).json({ msg: "Post deleted successfully." });
  } catch (error) {
    return res.status(500).json({ msg: "Post deletion failed." });
  }
});

module.exports = router;
