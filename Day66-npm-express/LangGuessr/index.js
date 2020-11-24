const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];
const colors = require("colors");

    const short = franc(input);

    if (short === 'und') {
        console.log('could not find language'.red);
    } else {
        const long = (langs.where("3", short));
    console.log(long.name.green);
    }

