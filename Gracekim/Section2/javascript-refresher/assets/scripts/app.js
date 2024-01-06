// import { apiKey } from "./util.js";

// import apiKey from "./util.js";

// import * as util from "./util.js";
// import { apiKey, abc as content } from "./util.js";

// console.log(util.apiKey);
// console.log(content);

// const userMessage = "Hello World!!";

// console.log(userMessage);

// function createGreeting(userName, message = "Hello!") {
//   //   console.log(userName);
//   //   console.log(message);
//   return "Hi, I am " + userName + "." + message;
// }

// const greeting1 = createGreeting("Max");
// console.log(greeting1);

// const greeting2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greeting2);

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   },
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Max", "Schwarzmuller"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Max",
//   age: 34,
// };

// console.log(userName);
// console.log(age);

// const name = user.name;
// const age = user.age;

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 34,
// };

// const newHobbies = ["Reading"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };
// console.log(extendedUser);

// const password = prompt("");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//   console.log("hobby");
// }

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi!"));

// function init() {
//   function greet() {
//     console.log("Hi!");
//   }
//   greet();
// }

// init();

// let userMessage = "Hello!";
// userMessage = userMessage.concat("!!!");

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Working");
// console.log(hobbies);

const message = "Hello";

const hobbies = ["Sports", "Cooking"];
// hobbies = [];
hobbies.push("Working");
console.log(hobbies);
