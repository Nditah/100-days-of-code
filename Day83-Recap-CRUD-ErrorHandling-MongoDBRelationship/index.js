const express = require("express");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");

// Models
const Product = require("./Models/product");
const Farm = require("./Models/farm");

// Helpers
const ExpressError = require('./helpers/ExpressError');
const catchAsync = require('./helpers/catchAsync');

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
// Index farms
app.get("/farms", catchAsync(async (req, res) => {
  const farms = await Farm.find({});
  res.render("index", { farms });
}));

// Add farm (form)
app.get("/farms/new", (req, res) => {
  res.render("newFarm");
});

// Post req add farm
app.post("/farms/new", catchAsync(async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  res.redirect("/farms");
}));

// View farm (farms/:Fid)
app.get("/farms/:Fid", catchAsync(async (req, res) => {
  const { Fid } = req.params;
  const farm = await Farm.findById(Fid).populate("products");
  res.render("showFarm", { farm });
}));

// Delete farm
app.delete("/farms/:Fid", catchAsync(async (req, res) => {
  const { Fid } = req.params;
  const farm = await Farm.findByIdAndDelete(Fid);
  res.redirect("/farms");
}));

// Add product form
app.get("/farms/:Fid/products/new", catchAsync(async (req, res) => {
  const { Fid } = req.params;
  const farm = await Farm.findById(Fid);
  res.render("newProduct", { farm });
}));

// Add product post req
app.post('/farms/:Fid/products/new', catchAsync(async (req, res) => {
  const { Fid } = req.params;
  const farm = await Farm.findById(Fid);
  const product = new Product(req.body);
  farm.products.push(product);
  await farm.save();
  await product.save();
  res.redirect(`/farms/${Fid}`);
}))

// Edit product form
app.get("/farms/:Fid/products/:Pid/edit", catchAsync(async (req, res) => {
  const { Fid, Pid } = req.params;
  const product = await Product.findById(Pid);
  const farm = await Farm.findById(Fid);
  res.render("editProduct", { product, farm });
}));

// Edit product
app.put("/farms/:Fid/products/:Pid/edit", catchAsync(async (req, res) => {
  const { Pid, Fid } = req.params;
  const product = await Product.findByIdAndUpdate(Pid, req.body);
  res.redirect(`/farms/${Fid}`);
}));

// Delete product
app.delete("/farms/:Fid/products/:Pid/delete", catchAsync(async (req, res) => {
  const { Pid, Fid } = req.params;
  const product = await Product.findByIdAndDelete(Pid);
  console.log(product);
  // await product.save();
  res.redirect(`/farms/${Fid}`);
}));

// In case route that doesn't exist is hit
app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404));
})

// Error handling middleware
app.use((err, req, res, next) => {
  const {statusCode = 500} = err;
  if (!err.message) err.message = "Something went wrong";
  res.status(statusCode).render('error', {err});
})

// Listening
app.listen(3000, () => console.log("Running on port 3000"));
