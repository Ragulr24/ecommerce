exports.getProduct = (req, res, next) => {
  res.json({
    success: true,
    message: "get product working!",
  });
};

exports.getSingleProduct = (req, res, next) => {
  res.json({
    success: true,
    message: "get single product working!",
  });
};
