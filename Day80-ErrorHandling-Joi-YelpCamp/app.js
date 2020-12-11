// Imports
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// Joi
const Joi = require('joi');

// EJS mate
const ejsMate = require("ejs-mate");

// Method override (for patch, put, delete requests)
var methodOverride = require("method-override");

// Require model
const Campground = require("./models/campground");
// ExpressError
const ExpressError = require('./helpers/ExpressError')
// Catch async
const catchAsync = require("./helpers/catchAsync");

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
app.get(
  "/campgrounds",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
  })
);

// Add campground form
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

// Add campground
app.post(
  "/campgrounds",
  catchAsync(async (req, res, next) => {
    // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
    
    // Defining server-side validation schema
    const campgroundSchema = Joi.object({
      campground: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string().required()
      }).required()
    })

    const { error } =  campgroundSchema.validate(req.body);
    if (error) {
      const msg = error.details.map(el=>el.message).join(',');
      throw new ExpressError(msg, 400);
    }

    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// Show campground
app.get(
  "/campgrounds/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    console.log(campground);
    console.log(campground.price);
    res.render("campgrounds/show", { campground });
  })
);

// Edit form
app.get(
  "/campgrounds/:id/edit",
  catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const campground = await Campground.findById(id);
      res.render(`campgrounds/edit`, { campground });
    } catch (e) {
      next(e);
    }
  })
);

// Edit element
app.put(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    });
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// Delete
app.delete(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect(`/campgrounds`);
  })
);

// In case route that doesn't exist is hit
app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404))
})

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  const {statusCode = 500} = err;
  if (!err.message) err.message = "Something went wrong";
  res.status(statusCode).render('error', {err});
  // res.send("Something went wrong");
});

// Listen on port 3000
app.listen(3000, () => console.log("APP RUNNING ON PORT 3000"));
