// we use while loop to execute a block of code as long as a specified condition is true

// example 1 simple while loop
let i = 0;
while (i < 5) {
    console.log(i); // Output: 0 1 2 3 4
    i = i + 2;
}

// example 2 while loop with array
let nums = [6,1,2,3,4,5];
let j = 0;
while (j < nums.length) {
    console.log(nums[j]); // Output: 6 1 2 3 4 5
    j++;
}

// example 3 while loop with object
let student = {
    name: "Elbasry",
    age: 20,
    country: "Sudan"
};

Object.keys(student);
let k = 0;
while (k < keys.length) {
    let key = keys[k];
    console.log(key + ": " + student[key]); // Output: name: Elbasry age: 20 country: Sudan
    k++;
}   


// while loop with break statement
let m = 0;
while (m < 10) {
    if (m === 5) {
        break;
    }
    console.log(m); // Output: 0 1 2 3 4
    m++;
}

// while loop with continue statement
let n = 0;
while (n < 10) {
    if (n === 5) {
        n++;
        continue;
    }
    console.log(n); // Output: 0 1 2 3 4 6 7 8 9
    n++;
}