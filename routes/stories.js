const express = require("express");

const router = express.Router();

const { getStories, addStory, deleteStory } = require("../Controllers/story");

router.get("/", getStories);
router.post("/", addStory);
router.delete("/:id", deleteStory);

module.exports = router;
