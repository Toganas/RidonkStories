const router = require("express").Router();

router.use("/users", require("./users"))
router.use("/story", require("./story"))

module.exports = router