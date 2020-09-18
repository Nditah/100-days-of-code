// Create arrays
const numbers = [43, 56, 22, 33, 67, 8];
const numbers2 = [1, 2, 3, 4];
const fruits = ["Pear", "Banana", "Orange", "Kiwi"];

let val;

// Length
val = numbers.length;
// Check if something is in array
val = Array.isArray(numbers);
// Get a single value
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(56);

// MUTATING ARRAYS
// Add onto end
numbers.push(2);
// Add onto front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1, 1);
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);
// Sort
val = fruits.sort();
val = numbers.sort();

// Use the compare function
val = numbers.sort((x, y) => x - y);
// Reverse compare
val = numbers.sort((x, y) => y - x);

// Find first number under 50
function under50(num) {
  return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);

// ***

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1989, end: 2010 },
  { name: "Company Four", category: "Retail", start: 2009, end: 2014 },
  { name: "Company Five", category: "Tech", start: 1987, end: 2010 },
  { name: "Company Six", category: "Finance", start: 1986, end: 1996 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 2016 },
  { name: "Company Eight", category: "Tech", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// FOR LOOP
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// FOREACH
companies.forEach((company) => console.log(company));

// ***

// FILTER

// Age over 21
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

let canDrink2 = ages.filter((age) => age >= 21);
console.log(canDrink2);

// Retail companies
const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);
console.log(retailCompanies);

// Companies from eigthies
const companiesEigthies = companies.filter((company) => company.start >= 1980);
console.log(companiesEigthies);

// ***

// MAP

// Create array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Squared ages
const agesSquared = ages.map((age) => Math.sqrt(age));
console.log(agesSquared);

// ***

// SORT

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

// ***

// REDUCE

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

const ageSum2 = ages.reduce((a, b) => a + b);
console.log(ageSum2);

const totalYears = companies.reduce(
  (tot, company) => tot + (company.end - company.start),
  0
);
console.log(totalYears);

// ***

// COMBINE METHODS

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b);
console.log(combined);
