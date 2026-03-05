const express = require("express");
const router = express.Router();
const { listPeople, getPerson } = require("../controllers/peopleController");

router.get("/", listPeople);
router.get("/:id", getPerson);

module.exports = router;