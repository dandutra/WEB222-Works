//Week 2 exercises

/* EXERCISE 1
Given r (radius) of a circle, calculate the area of a circle (A = π * r * r).*/

//function declaration
// function circleArea(radius) {
//     return Math.PI * radius * radius;
// }

//function expression
// const circleArea = function(radius) {
//     return Math.PI * radius * radius;
// }

//Arrow function
const circleArea = radius => Math.PI * radius * radius;

//console.log(circleArea(1));

/* EXERCISE 2
Simulate rolling a dice using random(). The function should allow the caller to specify any number of sides, 
but default to 6 if no side count is given: roll() (assume 6 sided, return random number between 1 and 6) vs. roll(50) 
(50 sided, return number between 1 and 50)*/

//function declaration
// function rollDice(faces = 6) {
//     return Math.floor(Math.random() * faces) + 1;
// }

//function expression
// const rollDice = function(faces = 6) {
//     return Math.floor(Math.random() * faces) + 1;
// };

//Arrow function implicit return
// const rollDice = (faces = 6) => Math.floor(Math.random() * faces) + 1;

//Or explicit return
const rollDice = (faces = 6) => {
    return Math.floor(Math.random() * faces) + 1;
};

//console.log(rollDice());

/* EXERCISE 3
Write a function that converts values in Celsius to Fahrenheit: convert(0) should return "32 F"
F = C * 9/5 + 32*/

//function declaration 
// function convert(C) {
//     return ((C * 9/5) + 32);
// }

//function expression
// const convert = function (C) {
//     return ((C * 9/5) + 32);
// };

//Arrow function
const convert = C => (C * 9/5) + 32;

//console.log(convert(0));

/* EXERCISE 4
Modify your solution to the previous function to allow a second argument: "F" or "C", 
and use that to determine what the scale of the value is, converting to the opposite: convert(122, "F") should return "50 C"*/

//function declaration
// function convertImproved (temp, metric) {
//     if (metric == "C") {
//         return ((temp * 9/5) + 32) + " F";
//     } else if (metric === "F") {
//         return ((temp - 32) * 5/9) + " C";
//     }
// }

//function expression
// const convertImproved = function(temp, metric) {
//     if (metric == "C") {
//         return ((temp * 9/5) + 32) + " F";
//     } else if (metric === "F") {
//         return ((temp - 32) * 5/9) + " C";
//     }
// };

//Arrow function
const convertImproved = (temp, metric) => {
    if (metric == "C") {
        return ((temp * 9/5) + 32) + " F";
    } else if (metric === "F") {
        return ((temp - 32) * 5/9) + " C";
    }
};

//console.log(convertImproved(0, "C"));

/* EXERCISE 5
Function taking any number of arguments (Numbers), 
returning true if they are all less than 50: isUnder50(1, 2, 3, 5, 4, 65) should return false
*/

//function declaration
// function isUnder50(...numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] >= 50) {
//             return false;
//         }
//     }
//     return true;
// }

//function expression
// const isUnder50 = function (...numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] >= 50) {
//             return false;
//         }
//     }
//     return true;
// };

//Arrow function
const isUnder50 = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 50) {
            return false;
        }
    }
    return true;
};

//console.log(isUnder50(1, 2, 3, 50, 4, 6));

/* EXERCISE 6
Function allowing any number of arguments (Numbers), returning their sum: sum(1, 2, 3) should return 6
*/

//function declaration
// function sum(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// }

// //function expression 
// const sum = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// };

//Arrow function
const sum = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
};

//console.log(sum(1, 2, 3));

/* EXERCISE 7
Function allowing any number of arguments of any type, returns true only if none of the arguments is falsy.
allExist(true, true, 1) should return true, but allExist(1, "1", 0) should return false.
*/

// //function declaration
// function allExist(...args) {
//     for (let i = 0; i < args.length; i++) {
//         if (!args[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// //function expression 
// const allExist = function (...args) {
//     for (let i = 0; i < args.length; i++) {
//         if (!args[i]) {
//             return false;
//         }
//     }
//     return true;    
// };

//Arrow function
const allExist = (...args) => {
    for (let i = 0; i < args.length; i++) {
        if (!args[i]) {
            return false;
        }
    }
    return true;
}

//console.log(allExist(1, "1", 0));

/* EXERCISE 8
Function to create a JavaScript library name generator: generateName("dog") should return "dog.js"
*/

//function declaration
// function generateName(name) {
//     return `${name}.js`;
// }

// //function expression 
// const generateName = function (name) {
//     return `${name}.js`;
// };

//Arrow function
const generateName = name => `${name}.js`;

//console.log(generateName("dog"));

/* EXERCISE 9
Function to check if a number is a multiple of 3 (returns true or false)
*/

//function declaration
// function isMultipleOf3(num) {
//     return (num % 3) === 0 ? true : false;
// }

// //function expression
// const isMultipleOf3 = function(num) {
//     return (num % 3) === 0 ? true : false;
// };

//Arrow function
const isMultipleOf3 = num => (num % 3) === 0 ? true : false;

console.log(isMultipleOf3(10));

/* EXERCISE 10
Check if a number is between two other numbers, being inclusive if the final argument is true: 
checkBetween(66, 1, 50, true) should return false.
*/

//function declaration 
function checkBetween(left, middle, right, isInclusive) {
    if (isInclusive) {
        if(middle >= left && middle <= right)
        {
            return true;
        } else {
            return false;
        }
    } else if (!isInclusive) {
        if(middle > left && middle < right) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(checkBetween(66, 1, 50, true));