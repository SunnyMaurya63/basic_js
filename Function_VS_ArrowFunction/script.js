/*

**Benefits of using arrow functions:
- They have shorter syntax than function expressions
- They have implicit return statements
- They retain scope of the method declared in when used as inner functions

**Constraints of using arrow functions:

-They are not suited for object-methods
-They cannot be used as constructors
-They are anonymous
*/


//--------------------- function and arrow function ----------------------------------------------------

function sum(a,b){
    return a+b;
}

let sum2=(a,b) =>a+b;

console.log(sum2(2,4));
console.log(sum(2,4));

//It is also important to note that because arrow functions do not rebind “this,” they cannot be used as constructors. 
//Using an arrow function as a constructor will result in the error shown below:
/*
const greeting = text =>{
    this.text = text;
};
const goodbye = new greeting('bye');
*/

const cats = ["shisha","semper","molly","belly"];
console.log(cats.map(function(cat){
    return cat.length;//If we had left “return” out of our function expression we would ,undefined at every place in array
}));

console.log(cats.map(cat=> cat.length));