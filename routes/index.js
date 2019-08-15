const router = require("express").Router();

router.use("/api/users", require("./api/users"));

module.exports = router;

// for Auth api route