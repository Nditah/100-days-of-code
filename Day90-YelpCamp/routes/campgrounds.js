const express = require("express");
const router = express.Router();

const { isLoggedIn, isAuthor, validateCampground } = require("../middlewares");

// Storage
const { storage } = require("../cloudinary");
// Multer
const multer = require("multer");
const upload = multer({ storage });

// Catch async
const catchAsync = require("../helpers/catchAsync");
// Campground Model
const Campground = require("../models/campground");
// ExpressError
const ExpressError = require("../helpers/ExpressError");

// Campground controllers
const campgrounds = require("../controllers/campgrounds");

router
  .route("/")
  // Campgrounds index
  .get(catchAsync(campgrounds.index))
  // Add campground
  // .post(
  //   isLoggedIn,
  //   validateCampground,
  //   catchAsync(campgrounds.createCampground)
  // );
  .post(upload.array("image"), (req, res) => {
    console.log(req.body, req.files);
    res.send("It worked");
  });

// Add campground form
router.get("/new", isLoggedIn, campgrounds.renderNewForm);

router
  .route("/:id")
  // Show campground
  .get(catchAsync(campgrounds.showCampground))
  // Edit element
  .put(
    isLoggedIn,
    isAuthor,
    validateCampground,
    catchAsync(campgrounds.updateCampground)
  )
  // Delete
  .delete(isLoggedIn, catchAsync(campgrounds.deleteCampground));

// Edit form
router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.renderEditForm)
);

module.exports = router;
