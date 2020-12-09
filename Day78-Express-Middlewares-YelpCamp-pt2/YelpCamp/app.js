// Imports
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// EJS mate
const ejsMate = require("ejs-mate");

// Method override (for patch, put, delete requests)
var methodOverride = require("method-override");

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

// Use ejs mate as engine
app.engine("ejs", ejsMate);

// Set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// MIDDLEWARES
// Body parser
app.use(express.urlencoded({ extended: true }));
// Method override
app.use(methodOverride("_method"));

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
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
});

// Show campground
app.get("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  console.log(campground);
  console.log(campground.price);
  res.render("campgrounds/show", { campground });
});

// Edit form
app.get("/campgrounds/:id/edit", async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  res.render(`campgrounds/edit`, { campground });
});

// Edit element
app.put("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground._id}`)
});

// Delete
app.delete("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect(`/campgrounds`);
});

// Listen on port 3000
app.listen(3000, () => console.log("APP RUNNING ON PORT 3000"));
