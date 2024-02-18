function downloadFile(url){
      return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Successfully downloaded file");
            resolve("file.jpg");
        },3000)
      })
}

function compressFile(filepath){
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            console.log("Compressed Successfully");
            resolve(filepath,"https://uploading.com")
        },4000);
    })
}

function uploadFile(filepath,url){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Uploaded Successfully");
        },2000)
    })
}

const result = downloadFile("http://www.google.com") // [compressFile,uploadFile] and who will be uploaded first ,the one with lesser timout so if we can use chaining then we can manage the order
console.log(result);
result
// .then(function(data){// data will be equivalent to all the knowledge which it knows
//     console.log(data);
//     compressFile(data)
//      .then(function(file,url){
//         uploadFile(file,url);
//     });
// })

// or we can use 
.then(function(data){
    console.log(data);
    return compressFile(data);
})
.then(function(file,url){
    uploadFile(file,url);
});