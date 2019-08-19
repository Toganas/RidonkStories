const router = require("express").Router();
const storyController = require("../../controllers/storyController")

router.route("/")
    .get(storyController.findAll)
    .post(storyController.create);

// api/story/remove/:id
// Deletes story by id
<<<<<<< HEAD
// router.route("/remove/:id")
//     .get(storyController.remove)

// api/story/category/:cat
=======

// api/story/:cat
>>>>>>> master
// find all stories with category
router.route("/category/:cat")
    .get(storyController.findCat);

<<<<<<< HEAD
// find a single story
router.route("/top")
    .get(storyController.findOne);
=======
router.route("/top")
    .get(storyController.findOne);

>>>>>>> master

module.exports = router;