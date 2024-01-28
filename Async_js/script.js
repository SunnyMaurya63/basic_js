// Js in not completely interpretating language
//-------------------------- example -1 ----------------------------
 // -------------------------- Example 1 ----------------------------

 "use strict"; // Enable strict mode for better error handling

// let teacher = "Sunny"; // Declare a global variable 'teacher' and initialize it

// function fun() {
//     teacher = "pulkit"; // Modify the global variable 'teacher'
//     content = "JS"; // Implicitly creates a global variable 'content' (no var/let/const)
//     console.log("NIT");
// }

// console.log(content); // Access global variable 'content' (outside the function)
// fun(); // Call the function 'fun'

// -------------------------- Example 2 ----------------------------

// let teacher = "Sunny"; // Declare a global variable 'teacher'

// function fun() {
//     teacher = "pulkit"; // Modify the global variable 'teacher'
    
//     function gun(ques) {
//         teacher = "sumit"; // Modify the global variable 'teacher'
//         // content = run; // Accessing undefined variable will give an error in strict mode
//         console.log(teacher, ques);
//     }

//     gun("what do you teach?");
// }

// console.log(teacher); // Access global variable 'teacher'
// fun(); // Call the function 'fun'
// console.log(teacher); // Access global variable 'teacher'
// // gun("new question"); // This line will give a reference error as 'gun' is not in scope here


// -------------------------- Other Examples --------------------------

// let x; // Declare a variable 'x' (undefined)
// console.log(x); // Output the value of 'x' (undefined)

// var consta = "run"; // Declare a global variable 'consta' and initialize it
// console.log(consta); // Output the value of 'consta'

// var fun = function doing_fun() { // Declare a variable 'fun' with a named function 'doing_fun'
//     function help() {
//         console.log("hella");
//     }
//     console.log("fun");
// }

// console.log(fun); // Output the value of 'fun'
// fun(); // Call the function 'fun'

// ---------------------- Which One is Better ----------------------

// var fun = function doing_fun() {
//     console.log("fun");
// }

// var gun = function () {
//     console.log("gun");
// }

// console.log(fun); // Output the value of 'fun'
// console.log(gun); // Output the value of 'gun'
// fun(); // Call the function 'fun'
// gun(); // Call the function 'gun'

// -------------------------- Factorial Example ----------------------

// function fact(n) {
//     if (n > 1) return n * fact(n - 1);
//     else return 1;
// }

// console.log(fact(3)); // Output the result of factorial function with input 3

// let arr = [1, 2, 3, 4, 5];

// let result = arr.map(function fact(n) { // Using map to calculate factorial for each element
//     if (n > 1) return n * arguments.callee(n - 1);
//     else return 1;
// });

// console.log(result); // Output the result of mapping factorial function on the array

// let result = arr.map(function fact(n) { // Using map to calculate factorial for each element
//     if (n > 1) return n * fact(n - 1);
//     else return 1;
// });

// console.log(result); // Output the result of mapping factorial function on the array

