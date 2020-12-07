const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose.connect(
  "mongodb://localhost:27017/farmStand",
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("DB connected")
);

// const p = new Product({
//     name: 'Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
// .then(p => {
//     console.log(p)
// })
// .catch(err => {
//     console.log(err)
// })

const seedProduct = [
  {
    name: "Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Milk",
    price: 2.69,
    category: "dairy",
  },
];

Product.insertMany(seedProduct)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
