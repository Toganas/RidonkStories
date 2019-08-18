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
<<<<<<< HEAD
=======

>>>>>>> cfbb1d01154e64c75747e83737943895e0daad58
