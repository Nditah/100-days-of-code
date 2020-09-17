// OBJECT LITERALS
const person = {
  name: "Jack",
  age: 30,
};

console.log(person.name, person.age);

// ***

// ES5 CONSTRUCTOR FUNCTIONS
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

const jack = new Person("Jack", "Smith", "12-20-1992");
const mary = new Person("Mary", "Johnson", "March 20 1980");
console.log(mary);

// ***

// PROTOTYPAL INHERITANCE
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");
console.log(customer1);

// ***

// USING OBJECT.CREATE
const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
};
const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";

console.log(mary.greeting());

// ***

// ES6 CLASSES
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Williams", "11-13-1980");
console.log(mary);
console.log(Person.addNumbers(1, 2));

// ***

// INHERITANCE IN ES6 CLASSES (SUB CLASSES)
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
}

const john = new Customer("John", "Doe", "444-444-4444", "Standard");
console.log(john.greeting());
