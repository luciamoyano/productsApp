const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/productController");
const ProductService = require("../services/productService");
const ProductInstance = new ProductController(new ProductService());

/* GET home page. */
router.get("/", (req, res, next) => {
  ProductInstance.getProducts(req, res);
});

router.get("/products/:id", (req, res, next) => {
  ProductInstance.getProductById(req, res);
});

router.post("/products", (req, res, next) => {
  ProductInstance.addProduct(req, res);
});

router.put("/products/modify", (req, res, next) => {
  ProductInstance.updateProductById(req, res);
});

module.exports = router;
