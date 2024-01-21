function down(url){
    console.log("starting your download from",url);
    setTimeout(function down(){
        console.log("Download successfully");
    },3000);
}
function compress(Path){
    console.log("compressing",Path);
    setTimeout(function compress(){
        console.log("compressed successfully");
    },4000);
}

down("www.google.com");