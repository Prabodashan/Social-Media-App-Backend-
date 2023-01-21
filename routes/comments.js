const express = require("express");

const router = express.Router();

const {
  
  getComments,
  addComment,
  deleteComment,
} = require("../Controllers/comment");

router.get("/", getComments);
router.post("/", addComment);
router.delete("/:id", deleteComment);

module.exports = router;
