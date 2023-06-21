let mongoose = require('mongoose');
//create model of product

let productModel = mongoose.Schema(
{
    "name" : String,
    "company" : String, 
    "price" : Number
},

{

    collection: "product"
}

)

module.exports = mongoose.model('Product', productModel);