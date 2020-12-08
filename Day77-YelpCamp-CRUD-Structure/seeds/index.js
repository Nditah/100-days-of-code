// Imports
const mongoose = require("mongoose");
// Import Cities, places, descriptors
const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers')

// Require model
const Campground = require("../models/campground");

// Connect mongoose
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Check if connected
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

// Get random element from array
const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    // Delete all elements
    await Campground.deleteMany({});

    // Loop 50 times and create seed elements
    for (let i=0; i<50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        }) 
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});