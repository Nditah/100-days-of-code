const express = require("express");
const router = express.Router();

// Catch async
const catchAsync = require("../helpers/catchAsync");
// Campground Model
const Campground = require("../models/campground");
// ExpressError
const ExpressError = require("../helpers/ExpressError");

// Joi schemas
const { campgroundSchema } = require("../schemas");

// Validate campground
const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    //   const msg = error.details.map((el) => el.message.join(","));
    const msg = error.message;
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// Campgrounds index
router.get(
  "/",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
  })
);

// Add campground form
router.get("/new", (req, res) => {
  res.render("campgrounds/new");
});

// Add campground
router.post(
  "/",
  validateCampground,
  catchAsync(async (req, res, next) => {
    const campground = new Campground(req.body.campground);
    await campground.save();
    req.flash("success", "Successfully made a new campground!");
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// Show campground
router.get(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findById(id).populate("reviews");
    if (!campground) {
      req.flash("error", "Cannot find that campground!");
      res.redirect("/campgrounds");
    }
    res.render("campgrounds/show", { campground });
  })
);

// Edit form
router.get(
  "/:id/edit",
  catchAsync(async (req, res, next) => {
      const { id } = req.params;
      const campground = await Campground.findById(id);
      if (!campground) {
        req.flash('error', 'Cannot find that campground!')
        res.redirect('/campgrounds');
      }
      res.render(`campgrounds/edit`, { campground });
  })
);

// Edit element
router.put(
  "/:id",
  validateCampground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    });
    req.flash("success", "Successfully updated campground!");
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// Delete
router.delete(
  "/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash("success", "Successfully deleted campground!");
    res.redirect(`/campgrounds`);
  })
);

module.exports = router;
