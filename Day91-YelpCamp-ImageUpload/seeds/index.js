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
      author: "5fe48aab50f75a04677e6517",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo soluta qui sunt consectetur impedit sed aliquid corrupti adipisci et obcaecati tenetur assumenda harum, consequatur quibusdam, hic, distinctio veniam odit.",
      price,
      images: [
        {
                "url" : "https://res.cloudinary.com/dqqhf85vd/image/upload/v1609242328/YelpCamp/emq9m3z8js2mzxlo8nuh.jpg",
                "filename" : "YelpCamp/emq9m3z8js2mzxlo8nuh"
        },
        {
                "url" : "https://res.cloudinary.com/dqqhf85vd/image/upload/v1609242329/YelpCamp/ldk6jcxzbmgvkehwnsuy.jpg",
                "filename" : "YelpCamp/ldk6jcxzbmgvkehwnsuy"
        }
]
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
