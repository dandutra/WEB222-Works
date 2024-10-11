/*
1. Write a function `log` that takes an `Array` of `String`s and displays them on the `console`.

2. An application uses an `Array` as a Stack (LIFO) to keep track of items in a user’s shopping history. 
Every time they browse to an item, you want to `addItemToHistory(item)`. How would you implement this?

3. Write a function `buildArray` that takes two `Number`s, and returns an `Array` 
filled with all numbers between the given number: `buildArray(5, 10)` should return `[5, 6, 7, 8, 9, 10]`

4. Write a function `addDollars` that takes an `Array` of `Number`s and uses the array’s `map()` method 
to create and return a new `Array` with each element having a `$` added to the front: `addDollars([1, 2, 3, 4])` 
should return `['$1', '$2', '$3', '$4']`

5. Write a function `tidy` that takes an `Array` of `String`s and uses the array’s `map()` method to create and 
return a new `Array` with each element having all leading/trailing whitespace removed: `tidy([' hello', ' world '])` 
should return `['hello', 'world']`.

6. Write a function `measure` which takes an `Array` of `String`s and uses the array’s `forEach()` method 
to determine the size of each string in the array, returning the total: `measure(['a', 'bc'])` should return `3`. 
Bonus: try to rewrite your code using the `Array`’s [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method.

7. Write a function `whereIsWaldo` that takes an `Array` of `String`s and uses the array’s `forEach()` method 
to create a new `Array` with only the elements that contain the text `"waldo"` or `"Waldo`” somewhere in them: 
`whereIsWaldo(['Jim Waldorf, 'Lynn Waldon', 'Frank Smith'])` should return `'Jim Waldorf, 'Lynn Waldon']`. 
Bonus: try to rewrite your code using the `Array`’s [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method.
*/

//EXERCISE 1
function log(...strings) {
    for(let str of strings) {
        console.log(str)
    }
}

//log(['string 1', 'string 2']);

//EXERCISE 2
let historyArray = [];
function addItemToHistory(item) {
    historyArray.push(item);
}

//EXERCISE 3
function buildArray(num1, num2) {
    let numArray = [];
    for(let i = num1; i <= num2; i++) {
        numArray.push(i);
    }
    return numArray;
}

//console.log(buildArray(5,10));

//EXERCISE 4
function addDollars(...numbers) {
   return dollarArray = numbers.map((num) => `\$${num}`);
}

// const addDollars = (...numbers) => numbers.map(num => {
//     return `${num + 1}`;
// })

console.log(addDollars[3,4,7,8,3]);

