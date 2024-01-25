// var num = 10;
// var dec = 10.12;
// var bool = true; // false/true
// var un = undefined;
// var str = "string";
// var obj = {};
// console.log(num, dec, bool);
// console.log(typeof num, typeof dec, typeof bool, typeof str, typeof obj, typeof undefined);


//----------------------- Objects -----------------------------------

// var x = {};
// var y = {"name": "Sunny"};
// var z = {name: "Sunny"};
// x.name = "Sunny";
// console.log(x, y, z, x.age);
// var arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);
// console.log(typeof arr);
// arr.name = "Sunny";
// console.log(arr.length);
// var fun = function() {};
// console.log(typeof fun); // function is a subtype of object


// --------------------------------------------Lets's play with Javascript ----------------------------

/* 
    concept :-
          When you use the '-' operator JS attempts to convert the string to a number before performing the sub. 
          If the string cannot be converted, it results in NaN.
          When you use the '+' operator :- JS attempts to convert the number to a string before performing the add. 
          If the string cannot be converted, it results in NaN.
*/

// console.log(1 + "2"); // "12" ,Adding a number and a string results in concatenation
// console.log(1 - "2"); // -1 ,// Sub a string from a number attempts to convert the string to a number
// console.log(1 - "Sunny"); // NaN ,// Suba non-convertible string from a number results in NaN (Not a Number)

// -------------------------- Converting strings to numbers using the Number function

// var m = Number("39"); // 39
// var n = Number("Sunny"); // NaN, as "Sunny" cannot be converted to a number
// var o = NaN; // NaN
// console.log(m, n, typeof n, typeof o); // 39 NaN "number" "number"

// Checking if a value is NaN using isNaN function

// console.log(isNaN(m)); // false, as m is a number
// console.log(isNaN(n)); // true, as n is NaN
// console.log(isNaN("Hey")); // true, as "Hey" cannot be converted to a number

// Comparing NaN with equality operators

// console.log(m === NaN); // false; NaN is not equal to anything, including itself
// console.log(n === NaN); // false; same reason as above

// Using Number.isNaN best method is more reliable for checking if a value is NaN, as it only returns true if the provided value is exactly NaN.

// console.log(Number.isNaN(m)); // false, m is a number
// console.log(Number.isNaN(n)); // true, n is NaN

//      --------------------- positive Zero and Negative Zero --------------------------------


// var pzero = 0;
// var nzero = -0; // IEEE 754
// console.log(pzero, nzero); // 0 -0
// console.log(pzero == nzero); // true, as 0 and -0 are considered equal in loose equality
// console.log(Object.is(nzero, -0)); // true, using Object.is for strict equality
// console.log(Object.is(pzero, 0)); // true, using Object.is for strict equality
// console.log(Object.is(nzero, 0)); // false, using Object.is for strict equality

