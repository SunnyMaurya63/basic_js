console.log("start");
//some more code

//


// Golden Rule :- If the first variable of your line is not function then it's function Expression

// var result =10;
// console.log(result*10);

// (function fun(){
//     var result =10;
//     console.log(2*result);
// })(); // iife
//

//------------------------- Naming Conflict(why we should use iife) -------------------------
// function fun(){
//     console.log("hey");
// }

// function fun(){
//     console.log(10);
// }
// fun(); // 10 , we overwrite the upper fun  (if we can iife one of the fun function then their won't be any conflict)

// // no effect after this
// //some more code
// console.log("end")

//------------- method 1 --------------

// var x // x ->network call
// try{
//     x=networkcall();
// }catch(err){
//     console.log(err);
//     x="nothing";  
// }

//------------- method 2 --------------

// var y=(function getX(){
//     try{
//         return networkcall();
//     }catch(err){
//         console.log(err);
//         return "nothing";
//     }
// })();

// m-2 is better
