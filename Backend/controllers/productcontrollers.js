const ProductModel = require("../models/productModel");

// Get Products API - /api/v1/products

exports.getProduct = async (req, res, next) => {
  const query =
    req.query && req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: "i" } }
      : {};

  try {
    const products = await ProductModel.find(query);
    res.json({
      success: true,
      message: "get product working!",
      products,
    });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};

// Get Single Prduct Api - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  // console.log(req.params.id,'ID');
  try {
    const product = await ProductModel.findById(req.params.id);
    res.json({
      success: true,
      message: "get single product working!",
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      // message: error.message
      message: "unable to get product data with id",
    });
  }
};
