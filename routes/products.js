// importing required packages
const express = require('express');

// creating new router object
const router = express.Router();

// initializing products controller
const productsController = require('../controllers/products_controller');

// getting all products
router.get('/', productsController.products);

// creating a product
router.post('/create', productsController.create);

// deleting a product using it's ID
router.delete('/:productID', productsController.delete);

// to update the quantity of a product
router.post('/:productID/update_quantity/', productsController.updateQuantity);


module.exports = router;