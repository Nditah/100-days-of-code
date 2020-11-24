const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log('New request');
// res.send("Hello, we got your request! This is a response")
// res.send({color: 'red'})
//     res.send('<h1>This is my web page</h1>')
// })

// '/
app.get('/', (req, res) => {
    res.send('This is the home page')
})

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit with the id ${postId}`)
})

// /cats => 'meow'
app.get("/cats", (req, res) => {
  res.send("Meow");
});

app.post('/cats', (req, res) => {
    res.send('Post request to /cats')
})

// /dogs => 'woof'
app.get("/dogs", (req, res) => {
  res.send("Woof");
});

// Query
app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q) {
        res.send('<h1>Nothing found if nothing searched</h1>')
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})

// Unknown path
app.get('*', (req, res) => {
    res.send(`Ì don't know that route to that path`)
})

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
