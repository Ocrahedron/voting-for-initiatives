const express = require("express");
const router = express.Router();
const PosController = require("../controllers/PosControllers")

router.post("/", PosController )

module.exports = router