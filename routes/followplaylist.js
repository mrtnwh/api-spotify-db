const { Router } = require("express");
const { putFollowPlaylist } = require("../controllers/followplaylist");

const router = Router();

router.get("/:id", putFollowPlaylist);
router.put("/:id", putFollowPlaylist);

module.exports = router;
