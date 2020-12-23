const express = require("express");
const router = express.Router({ mergeParams: true });

// Review Model
const Review = require("../models/review");
// Campground Model
const Campground = require("../models/campground");

// Joi schemas
const { reviewSchema } = require("../schemas");

// ExpressError
const ExpressError = require("../helpers/ExpressError");
// Catch async
const catchAsync = require("../helpers/catchAsync");

// Validate review
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    console.log(error);
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// REVIEW ROUTES
// Create review
router.post(
  "/",
  validateReview,
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'Review created successfully!');
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// Delete review
router.delete(
  "/:reviewId",
  catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    const review = await Review.findById(reviewId);
    req.flash('success', 'Review deleted successfully!');
    res.redirect(`/campgrounds/${id}`);
  })
);

module.exports = router;
