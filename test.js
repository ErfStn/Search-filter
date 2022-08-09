// // let persone = {
// //   name: "Erfan",
// //   lastName: "soltani",
// //   age: 20,
// //   address: {
// //     city: "tehran",
// //     zipCode:8215
// //   },
// // };

// // const howOld = "age"

// // console.log(persone.lastName);

// // function totalPrice(price) {
// //   return (price = price > 200 ? price * 0.9 : price * 0.95);
// // }

// // console.log(totalPrice(180));

// let a = " blue ";
// let b = "red";

// console.log(a, b);

// [a, b] = [b, a];

// console.log(a, b);

// // for
// // for (let i = 0; i < 5; i++) {
// //   console.log("the number is " + i);
// // }

// // while
// let x = 0;
// while (x <= 10) {
//   if (x % 2 !== 0) {
//       x++;
//       continue;
//   }
//   console.log("the number is " + x);
//   x++;
// }

// // do while
// // let y = 0;
// // do {
// //   if (y % 2 !== 0) console.log("the number is " + y);
// //   y++;
// // } while (y <= 5);

// //for in and for of
// let colors = ["green", "blue", "red"];

// for (let index in colors) {
//   console.log(index, colors[index]);
// }
// for (let items of colors) {
//   console.log(items);
// }

// let width = window.innerWidth;
// let height = window.innerHeight;

// if (width > height) {
//     alert("true")
// } else {
//     alert("false")
// }

// function fizzBuzz(number) {
//   if (number % 5 === 0 && number % 3 === 0) {
//     return "FizzBuzz";
//   } else if (number % 5 === 0) {
//     return "Buzz";
//   } else if (number % 3 === 0) {
//     return "Fizz";
//   } else if (typeof number !== "number") {
//     return "not a number";
//   } else {
//     return number;
//   }
// }

// console.log(fizzBuzz(8));

// function speedCheck(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     return "ok !";
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points < 12) console.log(points);
//   else console.log("Your licence is suspended!!!");
// }

// console.log(speedCheck(7));

// const uni = {
//   mohit: "1km",
//   sakhtemon: 4,
//   address: {
//     meydon: "sanat",
//     pasaj: "platin",
//   },
//   open: true,
//   students: function student(params) {
//     console.log("how many?");
//   },
// };
// console.log(uni.students);

//factory function
// function creatCircle(radius) {
//   return {
//     radius,
//     move() {
//       console.log("circle move");
//     },
//   };
// }
// const circle = creatCircle(5);
// console.log(circle);

// //contruction function
// function CreatCirle(radius) {
//   (this.radius = radius),
//     (this.move = function () {
//       console.log("move style");
//     });
// }
// const circle2 = new CreatCirle(25);
// console.log(circle2);

// const user = {
//   fName: "erf",
//   lName: "soli",
// };
// //add
// user.age = "20";
// //remove
// delete user.lName;

// console.log(user);

// //reference type
// const userData = { name: "Erfan" };

// const user1 = userData;

// userData.name = "Soli";

// user1.age = 20;

// const newUser = user1;

// newUser.family = "soli";

// console.log(user1);

// console.log(newUser);

// ////
// const user = {
//   name: "erf",
//   age: 20,
//   address: { city: "tehran", zip: 27, num: 225544 },
// };

// const item = Object.keys(user);
// // console.log(item);

// // for (key in user) console.log(key, user[key]);

// for (key of item) console.log(key , user[key]);

// if("family" in user)  console.log("fined!"); else console.log("not fined");

// let message = "i am from java Script"

// console.log(message.split(""));

// //exercise 1
// const member = {
//   name: "Erf",
//   age: 20,
//   address: { city: "Tehram", country: "Iran" },
// };

// function showUser(userData) {
//   for (let key in userData) console.log(key, userData[key]);
// }

// showUser(member);

//exercise 2
// function creatUser(name,age,street) {
//   return {
//       name,
//       age,
//       street,
//   }
// }
// console.log(creatUser("erf",20,"sepehr"));

// function Persone(name, age, street) {
//   this.name = name;
//   this.age = age;
//   this.street = street;
//   return this;
// }
// //const user = new Persone("erf", 20, "sepehr");
// const user = Persone.apply({}, ["erf", 20, "sepehr"]);

// console.log(user);

// const blogPost = {
//   title: "BME",
//   body: "AI",
//   comments: [
//     { author: "Erf", body: "hello" },
//     { author: "sara", body: "hi" },
//   ],
// };

// function BlogPost(title, body, author, text) {
//   this.title = title;
//   this.body = body;
//   this.comments = [author, text];
// }
// const blog = new BlogPost("BME", "AI", "Erf", "hello");

// const data = [
//   { name: "Erf", id: 1 },
//   { name: "Soli", id: 2 },
//   { name: "Sara", id: 3 },
//   { name: "Mahta", id: 4 },
//   { name: "Banaz", id: 5 },
// ];

// const selected = data.find(function (el) {
//   console.log(el);
//   // return el.id === 2;
// });

// console.log(selected);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// //end = +push -pop
// numbers.pop();
// //first = +unshift -shift
// numbers.shift();
// //middle = -+splice
// numbers.splice(3, 1);

// const items = [1, 2, 3, 4];
// const items2 = [5, 6, 7, 8];

//push => mutate , returns the new length of aaray
// const combine = items.push(items2)
// console.log(combine);
// console.log(items);

//concat => not mutate , new array
// const combine = items.concat(items2)
// console.log(combine);
// console.log(items);

//slice => not mutate , returns selected items of array
// const combine = items.slice(1,3)
// console.log(combine);
// console.log(items);

//splice => mutate , returns slice part array
// const combine = items.splice(2, 2);
// console.log(combine);
// console.log(items);

// const hello = function () {
//   console.log("hello");
// };
// const add = (a, b) => {return a + b};

// const numbers = [1, 2, -3, 4, 5, 6];

// const every = numbers.every((value) => {
//   console.log(value);
//   return value >= 0;
// });
// console.log(every); //=> true

// const some = numbers.some((value) => {
//   console.log(value);
//   return value >= 0;
// });
// console.log(every); //=> true

//forEach
// const users = [
//   { name: "erf", age: 20 },
//   { name: "saman", age: 25 },
//   { name: "banaz", age: 19 },
//   { name: "mahta", age: 18 },
// ];

// //users.forEach((user) => console.log(user.name, user.age))

// //map
// const userName = users.map((user) => user.name);

// // console.log(userName);

// //reduce => cart
// const cartItems = [
//   { name: "mooz", quantity: 2, price: "4 $", id: 101 },
//   { name: "khiar", quantity: 3, price: "1 $", id: 102 },
//   { name: "sib", quantity: 2, price: "2 $", id: 103 },
//   { name: "aalo", quantity: 1, price: "3 $", id: 104 },
//   { name: "goje", quantity: 3, price: "1 $", id: 105 },
// ];

// const totalPrice = cartItems.reduce((acc, curr) => {
//   const currentPrice = parseInt((curr.price.split(" ")[0]))
//   return acc + curr.quantity * currentPrice;
// }, 0);

// console.log(totalPrice + totalPrice * 0.09);

// function fromRange(min, max) {
//   const outPut = [];
//   for (let i = min; i <= max; i++) outPut.push(i)
//   return outPut;
// };

// console.log(fromRange(-5, 10));

// const numbers = [1, 2, 3, 4, 5, 6]

// function includes(array,search) {
//   for (let index of array) {
//     if (index === search) return true; return false;
//   }
// }
// console.log(includes(numbers,));

//argumants operator
// function sum() {
//   let total = 0;
//   for (const value of arguments) total += value;
//   return total;
// }

// //rest operator
// function plus(takhfif, ...args) {
//   let allItems = args.reduce((acc, curr) => acc + curr);
//   return allItems * takhfif;
// }
// console.log(plus(0.9, 9, 6, 4, 1, 2, 3));

// const persone = {
//   name: "Erf",
//   lastName: "Soli",
//   get fullName() {
//     console.log(`${this.name} ${this.lastName}`);
//   },
//   set fullName(value) {
//     if (typeof value !== "string") throw new Error("your name is not valid!");

//     const part = value.split(" ");

//     if (part.length !== 2) throw new Error("enter your name and last name");

//     this.name = part[0];
//     this.lastName = part[1];
//   },
// };
//!hello
//*ohayo
//?hi

// try {
//   persone.fullName = "noob sag";
// } catch (error) {
//   alert(error);
// }


// const users = {
//   _name: "soli ",
//   students: ["a", "b", "c"],
//   teach() {
//     this.students.forEach((s)=> {
//       console.  log(this._name, s);
//     });
//   }
// }

// users.teach();

// const pTags = document.querySelectorAll('p');

// pTags.forEach((item) => {
//   if (item.textContent.toLocaleLowerCase().includes("sag")) {
//     item.remove();
//   }
// });

// const p = document.createElement('p');
// p.innerHTML = "Helloooooo!"
// document.querySelector('body').appendChild(p)

// const courses = [
//   { title: "course 1" , isExist: true },
//   { title: "course 2" , isExist: false },
//   { title: "course 3" , isExist: false },
//   { title: "course 4" , isExist: true },
// ]

// const body = document.querySelector("body");
// const avalable = courses.filter((c) => c.isExist);

// const msg = document.createElement('h3');
// msg.innerHTML = `number of avalable product is: ${avalable.length}`;

// body.appendChild(msg);

// avalable.forEach((c) => {
//   const p = document.createElement("p");
//   p.innerText = c.title;
//   body.appendChild(p)
// })

// const inputText = document.querySelector("input");

// inputText.addEventListener("input", (e) => {
//   console.log(e.target.value);
// })

// const input = document.querySelector("#searchBox");
// const showProducts = document.querySelector("#products");

// const products = [
//   { title: "node js course" },
//   { title: "react course" },
//   { title: "javascript course" },
//   { title: "html css course" },
//   { title: "git-git hub course" },
// ];

// //! 1. products
// //! 2. filters
// //! 3. how to filters
// //! 4. add to DOM

// const filters = {
//   searchItem: ""
// };

// function renderProducts(_products, _filters){
//   const filterdProducts = _products.filter((item) => {
//     return item.title.toLowerCase().includes(_filters.searchItem.toLowerCase());
//   });

//   showProducts.innerHTML = "";

//   filterdProducts.forEach(element => {
//     const p = document.createElement('p');
//     p.textContent = element.title;
//     showProducts.appendChild(p)
//   });
// };

// input.addEventListener("input", (e) => {
//   filters.searchItem = e.target.value;
//   renderProducts(products,filters)
// });

//? counter

// const incrementBtn = document.querySelector(".increment");
// const resetBtn = document.querySelector(".reset");
// const decrementBtn = document.querySelector(".decrement");
// const counterValue = document.querySelector(".counter span");

// let count = 0;

// function increment() {
//   count++;
//   counterValue.textContent = count;
// }
// incrementBtn.addEventListener("click", increment);

// function decrement() {
//   count--;
//   counterValue.textContent = count;
// }
// decrementBtn.addEventListener("click", decrement);

// function reset() {
//   count=0;
//   counterValue.textContent = count;
// }
// resetBtn.addEventListener("click", reset);

// ? count v2
const buttons = document.querySelectorAll('.btn')
const counterValue = document.querySelector(".counter span");

let count = 0;

buttons.forEach((btn)=>{
  btn.addEventListener("click", () => {
    const classList = btn.classList;
    if (classList.contains("increment")) count++
    else if (classList.contains("decrement")) count--
    else count = 0
    counterValue.textContent = count;
  })

})