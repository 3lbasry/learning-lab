// we use do while loop to execute a block of code at least once and then repeat the loop as long as a specified condition is true

// example 1 simple do while loop
let i = 0;
do {
    console.log(i); // Output: 0 1 2 3 4
    i++;
} while (i < 5);

// example 2 do while loop with array
let nums = [6,1,2,3,4,5];
let j = 0;
do {
    console.log(nums[j]); // Output: 6 1 2 3 4 5
    j++;
} while (j < nums.length); 

// do while loop with break statement
let m = 0;
do {
    if (m === 5) {
        break;
    }
    console.log(m); // Output: 0 1 2 3 4
    m++;
} while (m < 10);

// do while loop with continue statement
let n = 0;
do {
    if (n === 5) {
        n++;
        continue;
    }
    console.log(n); // Output: 0 1 2 3 4 6 7 8 9
    n++;
} while (n < 10);