const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection open!");
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      dafault: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["XS", "S", "M", "L"],
  },
});

// productSchema.methods.greet = function() {
//     console.log('Hello World');
//     console.log(`- from ${this.name}`);
// }

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

// const findProduct = async () => {
//     const foundProduct = await Product.findOne({ name: 'Bike Helmet'});
//     foundProduct.greet();
// }
// findProduct()

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Mountain Bike" });
  // foundProduct.onSale = !foundProduct.onSale
  // foundProduct.save()
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
};

// Product.fireSale().then(res => console.log(res));
// findProduct();

const bike = new Product({
  name: "Tire Pump",
  price: 20,
  categories: ["Cycling"],
  size: "XS",
});
bike
  .save()
  .then((data) => {
    console.log("it worked!");
    console.log(data);
  })
  .catch((err) => {
    console.log("it did not work");
    console.log(err);
  });

// Product.findOneAndUpdate({ name: "Tire Pump" }, { price: 100 }, { new: true, runValidators: true })
//   .then((data) => {
//     console.log("it worked!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("it did not work");
//     console.log(err);
//   });
