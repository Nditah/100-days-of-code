const express = require('express');
const app = express();

// Importing express router routes
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin');

// Cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    // Accessing stored cookies (after installing cookie-parser)
    console.log(req.cookies);
    const {name = 'noname'} = req.cookies;
    res.send(`Hey there, ${name}!`);
})
// Setting cookies
app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie');
    res.cookie('animal', 'dog');
    res.send('Cookies sent')
})

// Sign cookies
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', {signed: true});
    res.send('Signed the cookie')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})

// Express router
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes)

app.listen(3000, () => {
    console.log('Listening on port 3000');
})