// we use if statement to execute a block of code if a specified condition is true

// example 1 simple if statement
let age = 20;
if (age >= 18) {
    console.log("you are eligible to vote");
}

// example 2 if else statement
let age2 = 15;
if (age2 >= 18) {
    console.log("you are eligible to vote");
} else {
    console.log("you are not eligible to vote");
}

// example 3 if else if statement
let age3 = 65;
if (age3 < 18) {
    console.log("you are not eligible to vote"); // Output: you are not eligible to vote
}
else if (age3 >= 18 && age3 <= 60) {
    console.log("you are eligible to vote"); // Output: you are eligible to vote
}
else {
    console.log("you are eligible to vote but you are old"); // Output: you are eligible to vote but you are old
}   

