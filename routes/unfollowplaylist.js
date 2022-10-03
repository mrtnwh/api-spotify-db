const { Router } = require("express");
const { deleteFollow } = require("../controllers/unfollowplaylist");

const router = Router();

router.get("/:id", deleteFollow);
router.delete("/:id", deleteFollow);

module.exports = router;
