const express = require('express');
const path = require('path');
const router = express.Router();
const productsController = require('../controllers/products')
//get shop 
router.get('/', productsController.showProducts);

module.exports = router; 