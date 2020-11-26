const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true}));
app.use(express.json())


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    console.log(data);
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats });
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post('/tacos', (req, res) => {
  console.log(req.body);
  const { type, qty } = req.body;
  res.send(`Ok, here are your ${qty} ${type} tacos`);
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
