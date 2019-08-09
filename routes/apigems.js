const router = require("express").Router();
const booksController = require("../../controllers/controlgems");

// Matches with "/api/books"
router.route("/")
    .get(controlgems.findAll)
    .post(controlgems.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(controlgems.findById)
    .put(controlgems.update)
    .delete(controlgems.remove);

module.exports = router;
