const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    category: String,
    products: [
        {
            name: String,
            img: String,
            description: String,
            price: String
        }
    ]
});

module.exports = mongoose.model('Categories', CategorySchema);
