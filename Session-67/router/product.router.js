
const express = require("express");
const router = express.Router();  //Router level middleware

const productsController = require("../controller/product.controller");

router.get("/", productsController.allProducts);
router.post("/", productsController.createProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteproduct);

module.exports = router;




//database(model)--->controler---->router------>server.js