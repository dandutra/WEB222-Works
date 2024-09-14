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
function convertImproved (temp, metric) {
    if (metric == "C") {
        return ((temp * 9/5) + 32) + " F";
    } else if (metric === "F") {
        return ((temp - 32) * 5/9) + " C";
    }
}

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

console.log(convertImproved(0, "C"));