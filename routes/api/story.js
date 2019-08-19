const router = require("express").Router();
const storyController = require("../../controllers/storyController")

router.route("/")
    .get(storyController.findAll)
    .post(storyController.create);

// api/story/remove/:id
// Deletes story by id

// api/story/:cat
// find all stories with category
router.route("/category/:cat")
    .get(storyController.findCat);

// find a single story
router.route("/top")
    .get(storyController.findOne);

module.exports = router;