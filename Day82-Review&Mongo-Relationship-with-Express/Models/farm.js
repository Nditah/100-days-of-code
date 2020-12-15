const mongoose = require("mongoose");
const { Schema } = mongoose;

const FarmSchema = new Schema({
  name: {
    required: [true, "Name required"],
    type: String,
  },
  city: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email required"],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Farm = mongoose.model("Farm", FarmSchema);

module.exports = Farm;
