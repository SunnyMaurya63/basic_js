function printHello(){
    console.log("Hello");
}
function blockForSec(){
    for(let i=0;i<100000000;i++){}
    console.log("unblocked");
}
console.log("start");
setTimeout(printHello,0);
blockForSec();
console.log("Me first");
blockForSec();

/*

start
unblocked
Me first
unblocked
Hello
*/ 

// conept :
/*

js will maintain stack for normal expressins /function but if 
we'll use settimeout then js will maintain a queue for it and it will //(FiFo)
enque the process.and when stack will be empty then queue (callback queue) will start deque

so now the question arises who will check is global stack empty??
so here comes the concept of event loop which will check continuously that ,is you stack empty??

*/