const fs = require("fs");
const folderName = process.argv[2] || "Project";

// fs.mkdir('Dir', { recursive: true}, (err) => {
//     console.log('In the callback');
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`);
fs.writeFileSync(`${folderName}/app.js`);
fs.writeFileSync(`${folderName}/styles.css`);
} catch (e) {
    console.log('Something went wrong');
    console.log(e);
}

console.log("I come after mkdir in the file");
