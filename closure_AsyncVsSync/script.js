/*
 when a function remember it's lexical scope even the function is 
executeed outside the scope, this is called closure
*/
// nature of js(not node / browser) is single threaded
// js don't has functionality of Timer but node/ browser has Timer API
// set timeout is function of browser/ node

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

console.log("start");

function F(){
        for(let i=0;i<=10000000000;i++){} // it acts as blocker 
             console.log("Hello");
};
setTimeout(function fun(){
    console.log("hey");
},5000); // fun will be printed after 5 sec and js goes down to print other
F();
console.log("end");

/*
start
Hello
end
hey
*/


// js is non blocking by the feature of browser and it looks Asynchronous to us(we'll feel that a new thread is going)
// we can do heavy tasks without hindering the Js code flow 
// slow tasks are handled seperately 