/*
 when a function remember it's lexical scope even the function is 
executeed outside the scope, this is called closure
*/
// nature of js(not node / browser) is single threaded
// js don't has functionality of Timer but node/ browser has Timer API
// set timeout is function of browser/ node

/*
As most developers know, that Javascript is single threaded, means, two statement in javascript can not be 
executed in parallel. 
Execution happens line by line, which means each javascript statements are synchronous and blocking. 
But there is a way to run your code asynchronously, if you use setTimeout() function, 
a Web API given by browser, which makes sure that your code executes after specified time (in millisecond).
 Example code:
*/

// console.log('Message 1');
// // Print message after 100 millisecond
// setTimeout(function() {
//    console.log('Message 2');
// }, 100);
// console.log('Message 3');

/*
setTimeout takes a callback function as first parameter, and time in millisecond as second parameter.
After executing above statements, browser will print “Message 1” & “Message 3” first, 
then it will print “Message 2”. This is where event loop comes in, 
which makes sure your asynchronous code runs after all the synchronous code is done executing.
*/

//--------------------------------------------------- Ex-1 ------------------------

// console.log("start");

// setTimeout(function fun(){
//     console.log("hey");
// },5000); // fun will be printed after 5 sec and js goes down to print other

// console.log("end");
/* output
start
end
hey //After 5 s
*/

//----------------------------------- Ex-2 ----------------------------------------------------------------

// console.log("start");

// function F(){
//         for(let i=0;i<=10000000000;i++){}; // it acts as blocker 
//              console.log("Hello");
// };
// setTimeout(function fun(){
//     console.log("hey");
// },5000); // fun will be printed after 5 sec and js goes down to print other
// F();
// console.log("end");

/*
start
Hello
end
hey
*/


// js is non blocking by the feature of browser and it looks Asynchronous to us(we'll feel that a new thread is going)
// we can do heavy tasks without hindering the Js code flow 
// slow tasks are handled seperately 

/*
 pure Js doesn't know how to talk to the internet 
 the fearure of talking to internet is given to js by the runtime
 and nodejs/browser is a runtime.
 runtime is like a enviornment where js gets a properly executed,js is 
 very weak and it provides many functions and Js engine.

 */

 /*
   js doesn't know a lot of thingd-
   how to interact with html,dom,local-storage etc..
 */
