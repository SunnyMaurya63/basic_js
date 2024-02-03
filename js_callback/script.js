function download(url,done){ // done is call back function
    console.log("starting your download from",url);
    setTimeout(function down(){
        console.log("Download successfully");
        done("file.jpg");    
    },3000);
}
function compressFile(Path,done){
    console.log("compressing",Path);
    setTimeout(function compress(){
        console.log("compressed successfully");
        done(Path,"www.uploading.com");
    },4000);
}
function uploadFile(Path,url){
    console.log("upload started for ",Path," on ",url);
    setTimeout(function upload(){
        console.log("uploaded successfully");
    },2000);
}


// download("www.google.com");
// compressFile("files.jpg");
// uploadFile("files.jpg","www.google.com");

download("www.google.com",function(file){ // passing compress file funcion as callback  (instead of done we're passing the function) 
    compressFile(file,function(file,url){
          uploadFile(file,url);    
    });
});