// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Listening on port 3000");
// });

const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async(pw, hashedPw) => {
    const result = bcrypt.compare(pw, hashedPw);
    if(result) {
        console.log('Logged you in');
    } else {
        console.log('Try again');
    }
}

// hashPassword('monkey');
login('monkey', '$2b$12$hjDUVtFjeIg5lIbf.EvTHeLSTs6mx.2AH0rVX.A1C/mfl/yoKJEf2');