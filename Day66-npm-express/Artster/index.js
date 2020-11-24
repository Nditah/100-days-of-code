const figlet = require('figlet');
const colors = require('colors');

figlet('Day 66 has started!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green);
})