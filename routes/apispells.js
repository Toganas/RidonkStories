const router = require("express").Router();
const booksController = require("../../controllers/controlspells");

// Matches with "/api/books"
router.route("/")
    .get(controlspells.findAll)
    .post(controlspells.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(controlspells.findById)
    .put(controlspells.update)
    .delete(controlspells.remove);

module.exports = router;