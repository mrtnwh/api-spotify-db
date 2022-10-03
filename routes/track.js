const { Router } = require("express");
const { getTrack } = require("../controllers/track");

const router = Router();

router.get("/:id", getTrack);

module.exports = router;
