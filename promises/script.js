 /*
 
 promises are readability enhancer
 These are special objects built into Js that are
immediately return when we make a call to browser api/ featue 

var data = fetch ("    something "),let's say it will return promise object in  data 
and the best part is that we don't have to give callback to it 
when the js reaches this line then js will execute it

we have to focous on two things, value and onfullfillment( which is array)\

** Js maintains two different queue 
** In callback queues stores callback statements
** In Micro Task queue( job queue) stores object's of promises
And preference will be given to Micro task queue 

*/

//***------- Example(priority, Job Queue > Callback Queue )
//----------------------Quick Question now: Check these statements for example---
//can you predict the sequence of output?:

// console.log('Message no. 1: Sync');
// setTimeout(function() {
//    console.log('Message no. 2: setTimeout');
// }, 0);
// var promise = new Promise(function(resolve, reject) {
//    resolve();
// });
// promise.then(function(resolve) {
//    console.log('Message no. 3: 1st Promise');
// })
// .then(function(resolve) {
//    console.log('Message no. 4: 2nd Promise');
// });
// console.log('Message no. 5: Sync');
//--------------------------------  -------------------------------------