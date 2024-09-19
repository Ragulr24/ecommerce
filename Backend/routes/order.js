const express = require("express");
const { createOrder } = require("../controllers/ordercontrollers");
const router = express.Router();
router.route("/order").post(createOrder);

module.exports = router;
