const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create campground schema
const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
});

// Export model
module.exports = mongoose.model('Campground', CampgroundSchema);