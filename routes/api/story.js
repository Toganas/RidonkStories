const router = require("express").Router();
const storyController = require("../../controllers/storyController")

router.route("/")
    .get(storyController.findAll)
    .post(storyController.create);

router.route("/:id")
    .get(storyController.remove);

module.exports = router;
