function greetings(name = "Guest") {
    console.log("Hello, " + name + "!")
};

greetings();
greetings("Annie");

// What is the output of the following code?

function mystery(a, b = 3) {
    return a * b;
};

console.log(mystery(4)); // 12

// Which of the following is the correct way to call (or invoke) the sum function?

function sum(num1, num2) {
    return num1, num2;
}

// 3. sum()

// What is the correct way to write an arrow function that takes two parameters and returns their sum?

const calculateArea = (a, b) => a + b;

console.log(calculateArea(2, 2));

// What is the correct way to write an arrow function that takes no parameters and returns the string "Hello"?
const arrowGreeting = () => "Hello";

console.log(arrowGreeting());

// What will be the output of the following code?
let multiply = (a, b = 1) => a * b;
console.log(multiply(5));
console.log(multiply(5, 2));

// What will be the output of the following code?

let x = 10;

function printX() {
    let x = 20;
    console.log(x);
}

printX();
console.log(x);

// What is the resumt of tryiogn to access blockVar outside its block?

if (true) {
    let blockVar = "Hello";
}
console.log(blockVar);