// DESTRUCTURING ARRAYS

let a, b;
[a, b] = [100, 200];
console.log(a, b);
// ***

// Rest pattern
let a, b;
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);
// ***

const arr = [1, 2, 3, 4, 5, 6];
[a, b] = arr;
console.log(a, b);
// ***

const people = ["John", "Beth", "Mike"];

const [person1, person2, person3] = people;
console.log(person1, person2, person3);
// ***

// Parse array returned from function
function getPeople() {
  return ["John", "Beth", "Mike"];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);
// ***

// Skip over items in array
const arr = ["eyes", "nose", "lips", "ears"];
let [, , lips] = arr;
console.log(lips);
// ***

// Unpacking values from a regular expression match
function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  const [, protocol, host, path] = parsedURL;
  return [protocol, host, path];
}

console.log(
  parseProtocol("https://developer.mozilla.org/en-US/Web/JavaScript")
);
// ***

// DESTRUCTURING OBJECTS

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b, rest);
// ***

const person = {
  name: "John Doe",
  age: 32,
  city: "Miami",
  gender: "Male",
};

const { name, age } = person;
console.log(name, age);
// ***

// Change property name
const obj = { one: 1, two: 2 };

var { one: anotherOne, two } = obj;

console.log(anotherOne);
// ***

// Set default values
const obj = { two: 2 };
var { one = 1, two } = obj;
console.log(one);
// ***

const obj = { first: "James", last: "Baker", alias: "JB" };
var { first = "John", last = "Doe", alias: nickname = "JD" } = obj;
console.log(nickname);
// ***

const user = {
  first: "James",
  last: "Baker",
  bestFriend: {
    first: "Scott",
    last: "Parkman",
  },
};

function welcomeMsg({ first, last, bestFriend: { first: best } }) {
  console.log(`Hi, my name is ${first} ${last}. ${best} is my best friend`);
}

welcomeMsg(user);
// ***
