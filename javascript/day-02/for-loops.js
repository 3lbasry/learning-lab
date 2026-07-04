// we use for loops to execute a block of code a specific number of times 


// example 1 simple for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}  

// example 2 for loop with array 
let nums = [6,1,2,3,4,5];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]); // Output: 6 1 2 3 4 5
}


// example 3 for loop with object
let student = {
    name: "Elbasry",
    age: 20,
    country: "Sudan"
};

for (let x in student) {
    console.log(x + ": " + student[x]); // Output: name: Elbasry age: 20 country: Sudan
}   

// for loop with break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // Output: 0 1 2 3 4
} 

// for loop with continue statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i); // Output: 0 1 2 3 4 6 7 8 9
}   