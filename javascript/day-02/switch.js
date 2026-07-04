// we use switch statement to execute a block of code based on different cases 


// example 1 simple switch statement

let day = 3; 

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}   


// example 2 switch statement menu case

let menu = "pizza";

switch (menu) {
    case "burger":
        console.log("You have selected burger");
        break;
    case "pizza":
        console.log("You have selected pizza");
        break;
    case "pasta":
        console.log("You have selected pasta");
        break;
    default:
        console.log("Invalid selection");
} 