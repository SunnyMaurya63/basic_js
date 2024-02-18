 /*
 
 **promises are readability enhancer
 These are special objects built into Js that are
immediately return when we make a call to browser api/ featue 

**Promises act as a placeholder (uski jgh lega jb tk jgh nhi aa jayegi) for the data we hope to get back
**we also attach the functionality we want to defer running untill the background work is done
**promise do 2 things, 1)inside Js 2) Outside Js 
  It spins up the process required to be run in the browser 
   nd gives a placeholder in js which has a value property which get filled when task completes


var data = fetch ("something "),let's say it will return promise object in  data 
and the best part is that we don't have to give callback to it 
when the js reaches this line then js will execute it.
**Inside the promise the object we have to focous on two things, value and onfullfillment( which is intially empty array).
Intially value is undefined ,later on time when fetch will return the data then
that data will be filled in value property and Onfullfillment will store some functions in the onfullfillment array
and all the functions in onfullfillment will be called one by one as value as parameter.
we can use .then to fill onfulfillmemnmt array.


** Js maintains two different queue 
** In callback queues stores callback statements
** In Micro Task queue(job queue) stores object's of promises
And preference will be given to Micro task queue 

*/

//***------- Example(priority, Job Queue > Callback Queue )
//----------------------Quick Question now: Check these statements for example---
//can you predict the sequence of output?:

console.log('Message no. 1: Sync');
setTimeout(function() {
   console.log('Message no. 2: setTimeout');
}, 0);
var promise = new Promise(function(resolve, reject) {
   resolve();
});
promise.then(function(resolve) {
   console.log('Message no. 3: 1st Promise');
})
.then(function(resolve) {
   console.log('Message no. 4: 2nd Promise');
});
console.log('Message no. 5: Sync');
//console.log(promise);// print this in firefox.
//--------------------------------  -------------------------------------