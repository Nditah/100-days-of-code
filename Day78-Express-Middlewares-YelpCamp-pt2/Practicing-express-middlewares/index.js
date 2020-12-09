const express = require('express');
const app = express();
const morgan = require('morgan');

morgan('tiny');

// app.use(morgan('tiny'));

// app.use((req, res, next) => {
//     req.requestTime = Date.now();
//     console.log(req.method, req.path);
//     next();
// })

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'bla'){
        next();
    } 
    res.send('Sorry you need a password');
})

app.get('/', (req, res) => {
    console.log(`request date: ${req.requestTime}`);
    res.send('Hello World');
})

app.get('/dogs', verifyPassword, (req, res) => {
    console.log(`request date: ${req.requestTime}`);
    res.send('Hello Dogs');
})

app.use((req, res) => {
    res.status(404).send('Not Found');
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
})