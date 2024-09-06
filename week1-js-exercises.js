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

