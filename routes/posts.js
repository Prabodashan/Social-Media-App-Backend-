const express = require("express");

const router = express.Router();

const { getPosts, addPost, deletePost } = require("../Controllers/post");

router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);

module.exports = router;
