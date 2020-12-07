const express = require("express");
const methodOverride = require('method-override')
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Product = require('./models/product');

mongoose.connect(
  "mongodb://localhost:27017/farmStand",
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("DB connected")
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy', 'baked goods'];

// List of all products products
app.get("/products", async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }

    const products = await Product.find({})
    res.render('products/index', { products });
}); 

// Form for inserting new product
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})

// Add product
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    console.log(newProduct);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

// Show single product details
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
})

// Edit product
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
})

// Update edited product
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;

    // FindbyId
    // const { name, price, category } = req.body;
    // const product = await Product.findById(id);
    // product.name = name;
    // product.price = price;
    // product.category = category;
    // await product.save();

    // FindbyIdAndUpdate
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidator: true, new: true });
    res.redirect(`/products/${product._id}`);
})

// Delete/ destroy product
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    res.redirect('/products');
})


app.listen(3000, () => console.log('App listening on port 3000'));
