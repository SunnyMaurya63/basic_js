function F(){
        for(let i=0;i<=10000000000;i++){} // it acts as blocker 
             console.log("Hello");
};
setTimeout(function fun(){
    console.log("hey");
},5000); // fun will be printed after 5 sec and js goes down to print other
F();
console.log("end");