const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    rating:String,
    images:[{
        image:String
    }],
    category:String,
    seller:String,
    stock:String,
    numofReviews:String,
    createdAT:Date
});

const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;