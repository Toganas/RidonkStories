const router = require("express").Router();
const booksController = require("../../controllers/controlrelic");

// Matches with "/api/books"
router.route("/")
    .get(controlrelic.findAll)
    .post(controlrelic.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(controlrelic.findById)
    .put(controlrelic.update)
    .delete(controlrelic.remove);

module.exports = router;