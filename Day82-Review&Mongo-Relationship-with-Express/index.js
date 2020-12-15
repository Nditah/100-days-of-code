const express = require("express");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const Product = require("./Models/product");
const Farm = require("./Models/farm");

// Connecting db
mongoose
  .connect("mongodb://localhost:27017/products", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

//   App init
const app = express();

// Set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//  EJS mate
app.engine("ejs", ejsMate);

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Routes
app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/home", { products });
});

// FARM ROUTES
// Index
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/home", { farms });
});

// Form to add new farm
app.get("/farms/new", (req, res) => {
  res.render("farms/new");
});

// Post req to add new farm
app.post("/farms", async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  res.redirect("/farms");
});

// Get single product
app.get("/farms/:id", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
    res.render("farms/show", { farm });
});

app.post('/farms/:id/products', (req, res) => {
  res.send(req.body);
})

// PRODUCT ROUTES
// New product form
app.get("/products/new", (req, res) => {
  res.render("products/new");
});

// Add new product
app.post("/products", async (req, res) => {
  const { name, price, category } = req.body;
  const product = new Product({
    name,
    price,
    category,
  });

  await product.save();
  res.redirect("/products");
});

// Get single product
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (product) {
    res.render("products/show", { product });
  }
});

// Edit form
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (product) {
    res.render("products/edit", { product });
  }
});

// Edit product
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  //   const { name, price, category } = req.body;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidator: true,
    new: true,
  });
  res.redirect(`/products/${product._id}`);
});

// Delete product
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

// Listening
app.listen(3000, () => console.log("Running on port 3000"));
