const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//gets all the data
router.get("/", async (req, res) => {
  try {
    const getPost = await Post.find();
    res.json(getPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//posts all the data
router.post("/", async (req, res) => {

  const post = new Post({
    projects: req.body.title,
    type: req.body.type,
    status: req.body.status,
    date: req.body.date,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    console.log("saved!");
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//search by id
router.get('/:postId',async(req,res) => {
  try {
    const getIdPost = await Post.findById(req.params.postId);
    res.json(getIdPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a post
router.delete("/:postId", async (req, res) => {
  try {
    const deleteIdPost = await Post.remove({ _id: req.params.postId});
    res.json(deleteIdPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          projects: req.body.title,
          type: req.body.type,
          status: req.body.status,
          date: req.body.date,
          description: req.body.description,
        },
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
