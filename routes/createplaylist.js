const { Router } = require("express");
const { postPlaylist } = require("../controllers/createplaylist");

const router = Router();

router.get("/:id/:name/:description", postPlaylist);
router.post("/:id/:name/:description", postPlaylist);

module.exports = router;
