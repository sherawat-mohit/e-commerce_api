// importing required packages
const Product = require('../models/product');

// displaying all the products
module.exports.products = function(req, res){
    Product.find({}, function(err, foundProducts){
        if(err){
            res.send(err);     // product not found
        }else{
            res.send(foundProducts);    // product found
        }
    });
}

// creating a new product
module.exports.create = function(req, res){
    // keys and values for the product
    const newProduct = new Product({
        name: req.body.name,    
        quantity: req.body.quantity
    });

    //  saving product details to the database
    newProduct.save(function(err){
        if(err){
            res.send(err);
        }else{
            res.send('New product added successfully.');
        }
    });
}

// deleting a product using it's ID
module.exports.delete = function(req, res){
    Product.deleteOne(
        {_id: req.params.productID},
        function(err){
            if(err){
                res.send(err);  // error while deleting product
            }else{
                res.send({
                    message: "Product Deleted Successfully"  // product deleted successfully
                });
            }
        });
}

// function to update product quantity
module.exports.updateQuantity = function(req, res){
    const ID = req.params.productID;
    // find the product using id
    Product.findById(ID, function(err, found){
        if(err){
            res.send(err);  // Error product not found
        }else{
            const newQty = parseInt(req.query.number);
            // Use the below line of code when we want to change the quantity to the number by putting postive and negative number after 'number' in URL to change the quantity
            // const newQty = parseInt(found.quantity) + parseInt(req.query.number);

            Product.findByIdAndUpdate(ID, {quantity: newQty}, function(err, updatedProduct){
                if(err){
                    res.send(err);  // printing error
                }else{
                    updatedProduct.quantity = newQty; // changing the quantity

                    //updates successfully
                    res.send({
                        product: updatedProduct,
                        message: 'updated successfully'
                    });
                }
            });
        }
    });
}