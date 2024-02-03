download("www.google.com",function(file){
    compressFile(file,function(file,url){
          uploadFile(file,url);    
    });
});