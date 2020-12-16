const mongoose = require("mongoose");
const Product = require('./product');
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

// Middleware to remove all related products when deleting a specific farm
FarmSchema.post('findOneAndDelete', async function(farm) {
  if (farm.products.length) {
    const res = await Product.deleteMany({ _id: { $in: farm.products}})
    console.log(res);
  }
})

const Farm = mongoose.model("Farm", FarmSchema);

module.exports = Farm;
