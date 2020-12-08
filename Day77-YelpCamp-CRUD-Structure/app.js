// Imports
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// Method override (for patch, put, delete requests)
var methodOverride = require('method-override')

// Require model
const Campground = require("./models/campground");

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

// Init express
const app = express();

// Set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// MIDDLEWARES
// Body parser
app.use(express.urlencoded({ extended: true }));
// Method override
app.use(methodOverride('_method'))

// ROUTES
// Home
app.get("/", (req, res) => {
  res.render("home");
});

// Campgrounds index
app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});

// Add campground form
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

// Add campground
app.post("/campgrounds", async (req, res) => {
  const { location, title, _id } = req.body.campground;
  const newCampground = new Campground({
    location,
    title,
  });

  await newCampground.save();
  res.redirect(`/campgrounds/${newCampground._id}`);
});

// Show campground
app.get("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  console.log(campground);
  res.render("campgrounds/show", { campground });
});

// Edit form
app.get('/campgrounds/:id/edit', async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  res.render(`campgrounds/edit`, { campground });
})

app.put('/campgrounds/:id', async (req, res) => {
  const { id } = req.params;
  const { title, location } = req.body.campground;
  await Campground.update( { _id: id }, {$set: {title, location}})
  res.redirect(`/campgrounds/${id}`);
})

app.delete('/campgrounds/:id', async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect(`/campgrounds`);
})

// Listen on port 3000
app.listen(3000, () => console.log("APP RUNNING ON PORT 3000"));
