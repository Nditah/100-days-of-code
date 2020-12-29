const express = require("express");
const router = express.Router({ mergeParams: true });

// Review Model
const Review = require("../models/review");
// Campground Model
const Campground = require("../models/campground");
// Catch async
const catchAsync = require("../helpers/catchAsync");
// Validate review
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middlewares");
// Reviews controllers
const reviews = require('../controllers/reviews')

// REVIEW ROUTES
// Create review
router.post(
  "/",
  isLoggedIn,
  validateReview,
  catchAsync(reviews.createReview)
);

// Delete review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
