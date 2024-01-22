// Js in not completely interpretating language
//-------------------------- example -1 ----------------------------
 "use strict"; 
// let teacher="Sunny"
// function fun(){
//     teacher="pulkit";
//     content="JS"; // it is auto global means if we won't find it globally then it'll act as global
//     console.log("NIT")
// }
// console.log(content)
// fun();

//-------------------------- example -2 ----------------------------
//"use strict";
// let teacher="Sunny"; // global -> diff bucket
// function fun(){   // global
//     teacher="pulkit"; // fun local -> diff bucket
//      function gun(ques){ // fun local , ques got gun's local
//         teacher="sumit";
//         //content=run; // undefined variables will give error in strict mode
//         console.log(teacher,ques);
//      }
//      gun("what do you teach ?")
// }
// console.log(teacher); // global
//fun(); // global
// console.log(teacher); // global
// gun("new question"); // global but reference error


//------------------------------------------ --------------------------

// let x; // undefined
// console.log(x); // undefined

// var consta ="run";
// console.log(consta);


// var fun= function doing_fun(){
//     function help(){
//          console.log("hella");
//     }
//     console.log("fun")
// }
// console.log(fun);
// //doing_fun();// we'l get reference error as doing_fun is in scope of fun 
// fun();

// ---------------------- which one is better ------------------------------
var fun = function doing_fun() { 
    console.log("fun") 
}
var gun = function (){
    console.log("gun");
}

console.log(fun);
console.log(gun);
fun();
gun();

function fact(n){
    if(n>1) return n*fact(n-1);
    else return 1;
}
// console.log(fact(3));

let arr=[1,2,3,4,5];

// let result =arr.map(function fact(n){ // named function
//     if(n>1) return n*arguments.callee(n-1); // after ecma script 5, if we use arguments.callee in strict mode and our function has no name then  it will give error 
//     else return 1;
// })
// console.log(result);

let result =arr.map(function fact(n){ // named function
    if(n>1) return n*fact(n-1); 
    else return 1;
})
console.log(result);


