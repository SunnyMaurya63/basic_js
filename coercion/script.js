
//---------------------------------- toString -------------------------
var x=null;
console.log(""+x); // null, imlict conversion 

var un=undefined;
console.log(""+undefined); // undefined

var b=true;
console.log(""+b); // true

var num=4.1223;
console.log(""+num); // 4.1223

var nzero= -0;
console.log(""+nzero); // 0

var arr=[];
console.log(""+[]);//""
console.log(""+{});//[object Object]

console.log(""+[1,2,3]); //1,2,3
console.log(""+[1,null,undefined]); // 1,,
console.log(""+[[],[[]],[]]); // ,, (it dont care about matrix also)
console.log(""+[,,]); // n-1 comas
console.log(""+{sunny:"coder"}); // [object Object]

// so to get avoid [object Object]
var new_obj={
    x:1,y:1,
    toString(){
        return "Hello world";
    }
}
console.log(""+new_obj);// Hello world, we override the toString with our toString(var)


//--------------------------- ToNumber()----------------------------------------------------

console.log(10-"");//10, ""-> 0
console.log(10-"0");//10, "0"-> 0
console.log(10-"-0");//10, "-0"-> 0
console.log(10-"0008");//2, "0008"-> 8
console.log(10-">");//10, ">"-> can't convert to a number
console.log(10-"0xaf");// in other base it is "0xaf"->q75

console.log(10-undefined);//NaN,specfically written in docs
console.log(10-null);//0,specfically written in docs

console.log(10-false);//10 ,false->0
console.log(10-true);//10 ,true->1

console.log(10-[""]); // 10
console.log(10-["0"]); // 10, ["0"]->"0"->0

console.log(10-[null]); //10
console.log(10-[undefined]); //10 (In array null and unbdefined will convert to zero)

console.log(10-{}) // NaN
console.log(10-{valueOf(){return 3}})//7

//------------------------------- ToBoolean() -------------------------------
/* (learn)
false values:-
       "",0,-0,null,NaN,undefined,false
*/
if(true && ""){
    console.log("hi")
}else{
    console.log("bye")
} // "bye"

if(true && (function(){return true;})()){
    console.log("hi")
}else{
    console.log("bye")
}//"hi"

console.log(1<2<3) // true
console.log(3>2>1)// false , 3>2->true, true>1-- 1>1 that's false

//--------------------- Equality operators -----------------------------------
console.log(42==[42]) //true, [42]->"42"->42 (it'll put valueOf on "42")
console.log(42=="42") // true
console.log([]==[]) // false 
console.log([] == ![]) //true , []== false -> []== 0 -> 0 =0 
console.log({} == !{}) // false

