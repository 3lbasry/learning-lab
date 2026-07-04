//functions are blocks of code that can be reused multiple times. They can take inputs, called parameters, and return an output.

// function declaration
function SayHi () {
    console.log("hi Elbasry");
}

//calling the function
SayHi(); // Output: hi Elbasry

// function with parameters (the first way to declare a function with parameters)
let name = "Elbasry";
function SayHi2 (name) {
    console.log("hello " + name);
} 

SayHi2(name); // Output: hello Elbasry


// function with parameters (the second way to declare a function with parameters)
function SayHi3 (name, age) {
    console.log("welcome " + name + " your age is " + age);
}

SayHi3("Elbasry", 20); // Output: welcome Elbasry your age is 20


// function with return value
function sum (x, y) {
    return x + y;
} 

console.log(sum(10, 20)); // Output: 30
