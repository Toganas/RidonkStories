const router = require("express").Router();
const storyController = require("../../controllers/storyController")

// /api/story
router.route("/")
    .get(storyController.findAll)
    .post(storyController.create);

// api/story/:id
// Deletes story by id
router.route("/:id")
    .get(storyController.remove);


module.exports = router;

// const mongoose = require("mongoose");
// const db = require("../models");
// const key = require("../config/keys")
// const express = require("express");
// const router = express.Router();
// const { check, validationResult } = require("express-validator");


// const Story = require("../../models/Story");
// const User = require("../../models/User");

// // @route   POST api/story
// // @desc    Create a story
// // @access  Private

// router.post("/", [
//     check("story", "Text is required")
//         .not()
//         .isEmpty()
// ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         try {

//             const user = await User.findById(req.user.id).select("-password");

//             const newStory = new Story({
//                 title: req.body.title,
//                 story: req.body.story,
//                 user: req.user.id,
//                 // possibly delete,in which case, delete the const user, as well.
//                 name: user.name
//             })

//             const story = await newStory.save();

//             res.json(story);

//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send("Server Error")
//         }
//     })

// module.exports = router;

// db.Story
//     .then(() => db.Story.collection.insertOne(
//         {
//             "user": req.user.id,
//             "title": req.body.title,
//             "story": req.body.story,
//             "category": req.body.category,
//             "lol": [],
//         }
//     ))
//     .catch(err => {
//         console.error(err);
//         process.exit(1)
//     })