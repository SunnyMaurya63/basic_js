// let xmlHttp = new XMLHttpRequest();
// xmlHttp.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
// xmlHttp.onreadystatechange = function execute() {
//     console.log(xmlHttp.responseText);
// }
// xmlHttp.send();

/*
**when you will run this on firefox insepect you will get 

{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

//this is to much hardwork ,we can use jquery but much simpler is we can use axios

const axios = require('axios');
// axios.get("https://jsonplaceholder.typicode.com/todos/1")
// .then(function(value){
//     console.log(value);
// })

//--- as this is promise based syntex (await will always be in async function)
async function call_method(){
    try{
        const result = await axios.get('https://jsonplaceholder');
        console.log(result.data);
    }
    catch(err){
        console.error(err);
    }
}

call_method();


