// Imports
const mongoose = require("mongoose");
// Import Cities, places, descriptors
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

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
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/collection/328212/400x400",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo soluta qui sunt consectetur impedit sed aliquid corrupti adipisci et obcaecati tenetur assumenda harum, consequatur quibusdam, hic, distinctio veniam odit.",
      price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
