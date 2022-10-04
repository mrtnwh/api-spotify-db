const { Router } = require("express");
const { putFollowPlaylist } = require("../controllers/followplaylist");

const router = Router();

router.put("/:id", putFollowPlaylist);

module.exports = router;
