const { Router } = require("express");
const { getArtist } = require("../controllers/artist");

const router = Router();

router.get("/:id", getArtist);

module.exports = router;
