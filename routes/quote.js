const express = require("express");
const router = express.Router()
const {getQuote} = require("../controllers/quote")

router.get("/quote", getQuote)

module.exports = router