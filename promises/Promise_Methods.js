//**---------------------------- (1) promise.all() ------------------------------
/*

The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed),
with an array of the fulfillment values. 
It rejects when any of the input's promises rejects, with this first rejection reason.

**The Promise.all() method is one of the promise concurrency methods. 
It can be useful for aggregating the results of multiple promises. 

*/

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});

//**(2)---------------------------- Promise.allSettled() ----------------------------
/*

The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise.
 This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed),
 with an array of objects that describe the outcome of each promise.

 ** typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, 
 or you'd always like to know the result of each promise.
 **In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other,
  or if you'd like to immediately reject upon any of them rejecting.
*/

const promises1 = Promise.resolve(3);
const promises2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promisess = [promises1, promises2];

Promise.allSettled(promisess).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// Expected output:
// "fulfilled"
// "rejected"



//** ---------------------------- (3) Promise.any() ----------------------------
/*

The Promise.any() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. 
It rejects when all of the input's promises reject (including when an empty iterable is passed), 
with an AggregateError containing an array of rejection reason

**his method is useful for returning the first promise that fulfills.
It short-circuits after a promise fulfills, 
so it does not wait for the other promises to complete once it finds one.

*/

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));
// Expected output: "quick"

//**---------------------------- (4) Promise.race() ----------------------------

/*
The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise settles with the eventual state of the first promise that settles.

**It's useful when you want the first async task to complete,
 but do not care about its eventual state (i.e. it can either succeed or fail).

 If the iterable contains one or more non-promise values and/or an already settled promise, 
then Promise.race() will settle to the first of these values found in the iterable.
*/

const ps1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const ps2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([ps1, ps2]).then((value) => {
    console.log(value);
    // Both resolve, but ps2 is faster
  });
  // Expected output: "two"
  
//**---------------------------- (5) Promise.resolve() ----------------------------

/*

**The Promise.resolve() static method "resolves" a given value to a Promise.
 If the value is a promise, that promise is returned; 
 if the value is a thenable, Promise.resolve() will call the then() method with two callbacks it prepared; 
 otherwise the returned promise will be fulfilled with the value.

**Promise.resolve() is generic and supports subclassing, which means it can be called on subclasses of Promise,
 and the result will be a promise of the subclass type.
 
** In brief, Promise.resolve() returns a promise whose eventual state depends on another promise, thenable object, or other value.

*/

const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then((value) => {
  console.log(`value: ${value}`);
});
console.log(`original === cast ? ${original === cast}`);

// Logs, in order:
// original === cast ? true
// value: 33


//Warning: Do not call Promise.resolve() on a thenable that resolves to itself. That leads to infinite recursion, because it attempts to flatten an infinitely-nested promise.

const thenable = {
    then(onFulfilled, onRejected) {
      onFulfilled(thenable);
    },
  };
  
  Promise.resolve(thenable); // Will lead to infinite recursion.