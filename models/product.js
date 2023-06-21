let mongoose = require('mongoose');
//create model of product
// Schema: data type of table
// Collection: Table  create record blueprint fot the record f
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