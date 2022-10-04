const { Router } = require("express");
const { postPlaylist } = require("../controllers/createplaylist");

const router = Router();

router.post("/:id/:name", postPlaylist);

module.exports = router;
