const mongoose = require('mongoose')
const {Schema} = mongoose;

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: {type: Number,min:[0,'Wrong data'],max:5},
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
});

exports.Product = mongoose.model('Product',productSchema)