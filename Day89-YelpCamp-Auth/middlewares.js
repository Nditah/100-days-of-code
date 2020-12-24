// Joi schemas
const { campgroundSchema, reviewSchema } = require("./schemas");
// Campground Model
const Campground = require("./models/campground");
// ExpressError
const ExpressError = require("./helpers/ExpressError");

// Check if logged in
module.exports.isLoggedIn = (req, res, next) => {
if (!req.isAuthenticated()) {
  // Store url they are requesting
  req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be signed in");
    return res.redirect("/login");
  }
  next();
}

// Validate campground
module.exports.validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    //   const msg = error.details.map((el) => el.message.join(","));
    const msg = error.message;
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// Validate campground
module.exports.isAuthor = async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground.author.equals(req.user._id)) {
    req.flash("error", "You do not have permission to do that!");
    return res.redirect(`/campgrounds/${id}`);
  }
  next();
};

// Validate review
module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    console.log(error);
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
