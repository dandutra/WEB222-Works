//Week 1 exercises


/* EXERCISE 1
Create a variable label and assign it the value "senecacollege". Create another variable tld and assign it "ca". 
Create a third variable domainName that combines label and tld to produce the value "senecacollege.ca".*/

let label = "senecacollege";
let tld = "ca";
let domainName = label + "." + tld;
//console.log(domainName);

/* EXERCISE 2 
Create a variable isSeneca and assign it a boolean value (true or false) depending on whether or not domainName is equal to "senecacollege.ca". 
HINT: use === and don’t write true or false directly.*/

let isSeneca = domainName === "senecacollege.ca" ? true : false;
//console.log(isSeneca);

/* EXERCISE 3 
Create a variable isNotSeneca and assign it the inverse boolean value of isSeneca. HINT: if isSeneca is true, isNotSeneca should be false.*/
let isNotSeneca = !isSeneca;

/* EXERCISE 4
Create four variables byte1, byte2, byte3, byte4, and assign each of these a value in the range 0-255.*/

let byte1 = 6;
let byte2 = 23;
let byte3 = 42;
let byte4 = 201;

/* EXERCISE 5
Convert byte1 to a String using .toString(), and console.log() the result. What happens if you use toString(2) or toString(16) instead?*/

let strByte1 = byte1.toString(2);
//console.log(strByte1);

//The optional parameter in the toString method specifies the base to conversion

/* EXERCISE 6
Create a variable ipAddress and assign it the value of combining your four byteN variables together, separated by ".". For example: "192.168.2.1".*/

let ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;
//console.log(ipAddress);

/* EXERCISE 7
Create a variable ipInt and assign it the integer value of bit-shifting (<<) and adding your byteN variables. 
HINT: your ipInt will contain 32 bits, the first byte needs to be shifted 24 bit positions (<< 24) so it occupies 32-25, the second shifted 16, the third 8.*/

let ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8) + byte4;
//console.log(ipInt);

/* EXERCISE 8
Create a variable ipBinary that contains the binary representation of the ipInt value. HINT: use .toString(2) to display the number with 1 and 0 only.*/

let ipBinary = ipInt.toString(2);
//console.log(ipBinary);

/* EXERCISE 9
Create a variable statusCode, and assign it the value for the “I’m a teapot” HTTP status code.*/

let statusCode = 418;

/* EXERCISE 10
Write an If statement that checks to see if your statusCode is a 4xx client error. HINT: use the <, >, >=, and/or <= operators to test the value*/

let isClientError;

if (statusCode >= 400 && statusCode < 500)
{
    isClientError = true;
}
//console.log(isClientError);

/* EXERCISE 11
Write a switch statement that checks your statusCode for all possible 1xx information responses. 
In each case, you should console.log() the response text associated with the status code, or "unknown information response" if the status code is not known.*/

let code = 42;

switch (code)
{
    case 100:
        console.log("Continue");
        break;
    case 101:
        console.log("Switching Protocols");
        break;
    case 102:
        console.log("Processing");
        break;
    case 103:
        console.log("Early Hints");
        break;
    default:
        console.log("Unknown information response");
        break;            
}

/* EXERCISE 12
Write a function is2xx(status) which takes a status code status (e.g., 200) and returns true if the status code is a valid 2xx code.*/

function is2xx(status) {
    let result;

    if (status >= 200 && status < 300)
    {
        result = true;
    }
    else 
    {
        result = false;
    }
    return result;
}

//console.log(is2xx(500));

/* EXERCISE 13
Create a variable studentName and assign your name. Create another variable studentAge and assign it your age. 
Use console.log() to print out a sentence that includes both variables, like "Alice is 20 years old."*/

let studentName = "Daniel";
let studentAge = 29;

//console.log(`${studentName} is ${studentAge} years old`);

/* EXERCISE 14
Create a variable isEven and assign it a boolean value (true or false) depending on whether a given number num is even or not. HINT: use the modulus operator %*/

let num = 5;
let isEven = (num % 2 === 0) ? true : false;
//console.log(isEven);

/* EXERCISE 15
Create a variable isOdd and assign it the inverse boolean value of isEven. HINT: if isEven is true, isOdd should be false*/

let isOdd = !isEven;

/* EXERCISE 16
Create a variable radius and assign it a value of 10. Calculate the area of a circle with this radius and assign the result to a variable area. 
HINT: use Math.PI and the formula area = πr^2*/

let radius = 10;
let area = Math.PI * radius * radius;
//console.log(area);

/* EXERCISE 17
Create a variable temperatureInCelsius and assign it a value. Convert this temperature to Fahrenheit and assign the result to a variable temperatureInFahrenheit. 
HINT: use the formula F = C * 9/5 + 32.*/

let temperatureInCelsius = 38;
let temperatureInFahrenheit = (temperatureInCelsius * 9 / 5) + 32;
//console.log(temperatureInFahrenheit);

/* EXERCISE 18
Create a variable heightInFeet and assign it a value. Convert this height to meters and assign the result to a variable heightInMeters. 
HINT: use the conversion factor 1 foot = 0.3048 meters.*/

let heightInFeet = 6;
let heightInMeters = heightInFeet * 0.3048;
//console.log(heightInMeters);

/* EXERCISE 19
Create a variable seconds and assign it a value. Convert this time to minutes and seconds (e.g., 90 seconds becomes 1 minute and 30 seconds) 
and assign the result to two variables minutes and remainingSeconds*/

let seconds = 200;
let minutes = Math.floor(seconds / 60);
let remainingSeconds = seconds % 60;
//console.log(`${minutes} minutes and ${remainingSeconds} seconds`);

/* EXERCISE 20
Create a variable score and assign it a value. Write an if statement that checks if the score is an A (90-100), B (80-89), C (70-79), D (60-69), or F (below 60) 
and assigns the result to a variable grade*/

let score = 85;
let grade;

if (score >= 90 && score < 100)
{
    grade = 'A';
}
else if (score >= 80 && score < 90)
{
    grade = 'B';
}
else if (score >= 70 && score < 80)
{
    grade = 'C';
}
else if (score >= 60 && score < 70)
{
    grade = 'D';
}
else if (score <= 60)
{
    grade = 'F';
}

//console.log(grade);

/* EXERCISE 21
Write a switch statement that checks the value of a variable day and console.log()s whether it is a weekday or weekend. HINT: day can be a value from 1 (Monday) to 7 (Sunday)*/

let day = 5;

switch (day) 
{
    case 1:
        console.log("weekday");
        break;
    case 2:
        console.log("weekday");
        break;
    case 3:
        console.log("weekday");
        break;
    case 4:
        console.log("weekday");
        break;
    case 5:
        console.log("weekday");
        break;
    case 6:
        console.log("weekend");
        break;
    case 7:
        console.log("weekend");
        break;
}

/* EXERCISE 22
Write a function isPositive(num) which takes a number num and returns true if the number is positive and false otherwise*/

function isPositive(num)
{
    let result = (num > 0) ? true : false;
    return result;
}

//console.log(isPositive(-1));

/* EXERCISE 23
Write a function isLeapYear(year) which takes a year year and returns true if the year is a leap year and false otherwise.
 HINT: a leap year is divisible by 4, but not by 100, unless it is also divisible by 400*/

function isLeapYear(year)
{
    let result;

    if (year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0))
    {
        result = true;
    }
    else
    {
        result = false;
    }
    return result;
}
//console.log(isLeapYear(2027));

/* EXERCISE 24
Write a function getDayOfWeek(day) which takes a number day (from 1 to 7) and returns the day of the week as a string (e.g., “Monday”).*/

function getDayOfWeek(day) 
{
    let result;

    switch (day)
    {
        case 1:
            result = "Monday";
            break;
        case 2:
            result = "Tuesday";
            break;
        case 3:
            result = "Wednesday";
            break;
        case 4:
            result = "Thursday";
            break;
        case 5:
            result = "Friday";
            break;
        case 6:
            result = "Saturday";
            break;
        case 7:
            result = "Sunday";
            break;
    }
    return result;
}
//console.log(getDayOfWeek(5));

/* EXERCISE 25
Write a function getFullName(firstName, lastName) which takes two strings firstName and lastName and returns the full name as a single string.*/

function getFullName(firstName, lastName)
{
    return `${firstName} ${lastName}`;
}
//console.log(getFullName("Daniel", "Dutra"));

/* EXERCISE 26
Write a function getCircleArea(radius) which takes a number radius and returns the area of a circle with that radius.*/

function getCircleArea(radius)
{
    return Math.PI * radius * radius;
}
//console.log(getCircleArea(5));

/* EXERCISE 27
Write a function getHypotenuse(a, b) which takes two numbers a and b (the lengths of the two sides of a right triangle) and returns the length of the hypotenuse. 
HINT: use the Pythagorean theorem and Math.sqrt() to calculate the square root.*/

function getHypotenuse(a,b)
{
    let hypotenuse = Math.sqrt((a * a) + (b * b));
    return hypotenuse;
}
console.log(getHypotenuse(3,4));



