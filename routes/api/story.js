const router = require("express").Router();
const storyController = require("../../controllers/storyController")

router.route("/")
    .get(storyController.findAll)
    .post(storyController.create);

// api/story/:id
// Deletes story by id
router.route("/:id")
    .get(storyController.remove);

module.exports = router;

