const _ = require('lodash');

const numbers = [33,45,6,778,9,30];

_.each(numbers, function(number, index) {
    console.log(number);
});