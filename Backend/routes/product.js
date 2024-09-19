const express = require("express");
const { getProduct, getSingleProduct } = require("../controllers/productcontrollers");
const { createOrder } = require("../controllers/ordercontrollers");
const router = express.Router();

router.route("/products").get(getProduct);
router.route("/products/:id").get(getSingleProduct);
router.route("/order").post(createOrder);

module.exports = router;
