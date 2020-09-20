// CALLBACKS
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);

// PROMISES
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

// FETCH API
// Get local text file data
document.getElementById("button1").addEventListener("click", getText);

function getText() {
  fetch("test.txt")
    .then((res) => res.text())
    .then((data) => (document.getElementById("output").innerHTML = data))
    .catch((err) => console.log(err));
}

// Get local JSON Data
document.getElementById("button2").addEventListener("click", getJson);

function getJson() {
  fetch("post.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// Get from external API
document.getElementById("button3").addEventListener("click", getExternal);

function getExternal() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
