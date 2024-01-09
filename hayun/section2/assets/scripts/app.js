// function createGreeting(userName, message = "Hello!") {
//   console.log(userName);
//   console.log(message);
//   return "Hi, I am " + userName + "." + message;
// }

// const greeting1 = createGreeting("Max");
// console.log(greeting1);

// const greeting2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greeting2);

// export default (useName, message) => {
//   console.log("Hello");
//   return useName + message;
// };

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
//     this.name = name; // this 키워드를 사용해 객체의 프로퍼티 값 저장
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]); // 인덱스값을 통해 값에 엑세스함.

// hobbies.push("Working");
// console.log(hobbies);

// hobbies.findIndex((item) => item === "Sports");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Max", "Schwarzmuller"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const {name: userName, age} = { // field name 사용해야 함.
//     name: "Max",
//     age: 34
// };

// console.log(userName);
// console.log(age);

// const name = user.name;
// const age = user.age;

// const hobbies = ["Sports", "Cooking"];
// const user = {
//     name: "Max",
//     age: 34
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies); 

// const extendedUser = {
//     isAdmin: true,
//     ...user
// };
// console.log(extendedUser);

// const password = prompt('Your password');

// if (password === "Hello") {
//     console.log("Hello works");
// } else if (password === "hello") {
//     console.log("Hello works");
// } else {
//     console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//     console.log(hobby); // 이 코드가 배열의 원소 수만큼 실행
// }

// const list = document.querySelector('ul');
// list.remove();

// function handleTimeout() {
//     console.log("Timed out!");
// };

// const handleTimeout2 = () => {
//     console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000); // name만을 전달해 함수 전체를 전달함.
// setTimeout(handleTimeout2, 3000);
// setTimeout(()=>{
//     console.log('More timing out...');
// }, 4000);

// function greeter(greetFn) {
//     greetFn();
// }

// greeter(() => console.log("Hi")); // 이 함수가 greetFn의 매개변수 값으로 전달되고 위 함수가 실행됨.

// function init() {
//     function greet() {
//         console.log('Hi!');
//     }

//     greet(); // 범위가 init 함수 내로 한정.
// }

// init();

let userMessage = 'Hello!';
userMessage = userMessage.concat('!!!');

const hobbies = ["Sports", "Cooking"];
// hobbies = [];
hobbies.push("Working");
console.log(hobbies);

// 변수의 값을 저장할 때는 값 자체를 저장하는 게 아니라
// 해당 값의 메모리 주소를 저장함. 
// 배열은 메모리 어딘가에 저장됨.
