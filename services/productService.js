const Product = require("../models/productModel");

class ProductService {
  addProduct(data) {
    const newProduct = new Product(data);
    return newProduct.save();
  }
  getProducts() {
    const query = Product.find().exec();
    return query;
  }
  getProductById(id) {
    const query = Product.findOne({ _id: id }).exec();
    return query;
  }
  updateProductById(product) {
    const query = Product.findOneAndUpdate({ _id: product.id }, product).exec();
    return query;
  }
}

module.exports = ProductService;
