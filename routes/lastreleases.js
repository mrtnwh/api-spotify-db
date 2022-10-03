const { Router } = require("express");
const { getLastReleases } = require("../controllers/lastreleases");

const router = Router();

router.get("/:id", getLastReleases);

module.exports = router;
