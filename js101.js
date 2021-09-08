// document.write("<h1>JS 101</h1>");
// alert("ok");
// console.log("hello world");
// console.error("error101");

// let name = "jessie";
// name = "jeey"
// console.log(name);

// // String to Number

// let a = parseFloat("2.2");
//  or let a = +"2.2";

// console.log(typeof(a));

// // Number to String
// let b = 2.5+"";
// let c = 2.5.toString();

// Array
//let num1 = 1, num2 = 2 , num3 = 3;
// let A = Array(1, 2, 3);
// let color = ["reed", "blue", "yellow"];
// color[0] = "red";
// console.log(color);
// // console.log(A);
// console.log("index", A[0]); //index ตัวแรกใน Array

// if
// let money = 15;
// let pocket = 1000;


// if (pocket >= money) {
//     pocket = pocket - money
//     console.log(pocket);
// }

// หาเลขคู่ เลขคี่
// let x = 50;

// if (x % 2 == 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// if แบบ ลดรูป ใช้กับเงื่อนไขที่ไม่ซับซ้อน
// let x = 50,
//     y = 51;
// (x > y) ? console.log("yes"): console.log("no");

// while

// let a = 1;
// while (a <= 5) {
//     console.log("he" + a);
//     a++;

//     if (a == 5) { break; }
// }

// for

// let s = 5;

// for (let i = 1; i <= s; i++) {
//     console.log("ok");
// }

// do...while
// let c = 1;
// do {
//     console.log(c);
//     c++;
// }
// while (c < 5) {
//     console.log("true");

// }

// function

// function print() {
//     console.log("hello");
// }

// function massage() {
//     alert("alert 01");
// }

// return ค่า

// function getIP() {
//     return "192.168.0.1";
// }

// let a = getIP();
// console.log("IP :", a);

// function getNum(){
//     return 100*10;
// }

// function setmoney(money) {
//     let bonus = 1000;
//     return money + bonus;
// }
// let total = setmoney(15000);
// let Atotal = setmoney(17000);
// console.log("total = ", Atotal);

// total -= 500;
// console.log(total);

// Array properyies

let color = ["red", "blue", "yellow"];
let count = color.length;
// console.log(count);
let resulr = color.sort(); // reverse ตรงข้าม
// console.log(resulr);

// let first = color[0];
// let last = color[color.length - 1];

// color.push("green");
// console.log(color);

// for Array

// for (let i = 0; i < color.length; i++) {
//     console.log(color[i]);
// }

// foreach เข้าถึง Array

// color.forEach(data);

// function data(color) {
//     console.log("สี : " + color);
// }

// Array to String 
// var x = color.toString();

// console.log(typeof(x));

// join

// let d = color.join(" ");
// console.log(d);

// color.pop();
// console.log(color);

// รวม Array

let animal1 = ["dog", "cat", "pig"];
let animal2 = ["bird", "bug", "snail"];

// animal1 = animal1.concat(animal2); รวม
// console.log(animal1);

// sort ตัวเลข
// let num = [10, 20, 30, -1, -5];
// console.log(num);

// num.sort(function(a, b) {   //reverse = มาก -> น้อย 
//     return a - b;  // b-a;
// });

// console.log(num);

// Object

// let obj = {
//     name: "jessy",
//     age: 24,
//     color: "black",
//     category: "js",

//     getobj: function() {
//         return this.name + " " + this.age;
//     }
// };

// console.log(obj.getobj()); //เรียกใช้

// console.log(obj.name);

//confirm

// function deletedata() {
//     let result = confirm("are you sure ?");
//     if (result) {
//         console.log(true);
//         console.log("ok")
//     } else { console.log(false); }

// }

//html dom

// const A = document.querySelector('.as');
// // or document.getElementBy...
// const box = document.querySelector('.box');

// function ass() {
//     A.style.color = "red";
//     A.style.fontSize = "60px";
//     A.setAttribute("class", "ass");
// }

// function light() {
//     box.setAttribute("class", "light")
// }

// function dark() {
//     box.setAttribute("class", "dark")
// }
// const Pall = document.querySelectorAll('p');
// console.log(Pall[1]); //เป็น Array[]
// or let s = Pall[1].innerHTML;

// สร้าง element ใช้ js 
// const je = document.getElementById('je');
// let cou = 0;
// const new = document.createElement('li');
// new.innerText = "jame"
// je.replaceChild(new);


// function add() {
//     const item = document.createElement('li');
//     item.innerText = "jessy" + (cou++);
//     je.appendChild(item);

//     function deletee() {

//         je.removeChild(item);
//     }
// }