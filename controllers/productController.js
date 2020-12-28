class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async getProducts(req, res) {
    try {
      const response = await this.productService.getProducts();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).send("cannot send products");
    }
  }

  async addProduct(req, res) {
    if (req.body) {
      try {
        const product = req.body;
        const response = await this.productService.addProduct(product);
        console.log(response);
        res.status(200).send("product added succesfully");
      } catch (error) {
        console.log(error);
        res.status(500).send("cannot add product");
      }
    } else {
      res.status(400).send("no information provided");
    }
  }

  async getProductById(req, res) {
    const { id } = req.params;
    if (id) {
      try {
        const product = await this.productService.getProductById(id);
        console.log(product);
        res.status(200).json(product);
      } catch (error) {
        console.log(error);
        res.status(500).send("cannot get product");
      }
    } else {
      res.status(400).send("no id provided");
    }
  }

  async updateProductById(req, res) {
    const product = req.body;
    if (product.id) {
      try {
        const response = await this.productService.updateProductById(product);
        console.log(response);
        res.status(200).send("product updated correctly");
      } catch (error) {
        console.log(error);
        res.status(500).send("couldn't update product");
      }
    } else {
      res.status(400).send("no id provided");
    }
  }
}

module.exports = ProductController;
