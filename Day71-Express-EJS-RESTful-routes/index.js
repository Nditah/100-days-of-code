const express = require("express");
var methodOverride = require('method-override')
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let posts = [
  {
    id: uuid(),
    user: "user1",
    post:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quaerat earum.",
  },
  {
    id: uuid(),
    user: "user2",
    post:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolorum exercitationem doloribus doloremque maxime officiis qui nam velit atque amet iusto modi, voluptatem perferendis totam facere deleniti tempora nemo minima!",
  },
  {
    id: uuid(),
    user: "user3",
    post:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione perferendis error dolorum nam molestiae eum.",
  },
];

app.get("/", (req, res) => {
    res.render('posts/home');
});

// CRUD

// Read
// Get /posts - get all posts
app.get('/posts', (req, res) => {
    res.render('posts/index', { posts })
})

// Create
// Form
app.get('/posts/new', (req, res) => {
  res.render('posts/new')
})

// Post /posts - create post
app.post('/posts', (req, res) => {
  const { user, post } = req.body;
  posts.push({ user, post, id: uuid()});
  console.log(posts);
  res.redirect('/posts');
})

// Get /posts/:id - get specific post
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    res.render('posts/details', { post });
})

// Update
// Update form
app.get('/posts/:id/edit', (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === id);
  console.log( id, post );
  res.render('posts/edit', { post });
})

// Patch /posts/:id
app.patch('/posts/:id', (req, res) => {
  const { id } = req.params;
  const newPostText = req.body.post
  const post = posts.find(p => p.id === id);
  post.post = newPostText;
  res.redirect('/posts');
})

// Destroy
// Delete /posts/:id
app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  posts = posts.filter(c => c.id !== id);
  res.redirect('/posts');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });