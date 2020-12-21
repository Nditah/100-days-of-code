const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

// Create campground schema
const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: {
    type: Number,
    required: true,
  },
  description: String,
  location: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

CampgroundSchema.post("findOneAndDelete", async function (data) {
  if (data) {
    await Review.deleteMany({
      _id: {
        $in: data.reviews,
      },
    });
  }
});

// Export model
module.exports = mongoose.model("Campground", CampgroundSchema);
