const express = require('express');
const path = require('path');
const productsController = require('../controllers/products');
const router = express.Router();

//new variable to hold data
const products = [];

// /admin/add-product get
router.get('/add-product', productsController.getAddProduct);
// /admin/add-product post
router.post('/add-product', productsController.postAddProduct);

// module.exports = router;

module.exports = router;
