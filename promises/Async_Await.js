// Function to simulate downloading a file with a delay of 3 seconds
function downloadFile(url){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
          console.log("Successfully downloaded file");
          resolve("file.jpg"); // Resolving the promise with the downloaded file name
      }, 3000);
    });
}

//The resolve parameter is a function that is called when the asynchronous operation is successfully completed. 
//It takes an optional value as an argument, which represents the result of the operation.


// Function to simulate compressing a file with a delay of 4 seconds
function compressFile(filepath){
  return new Promise(function(resolve, reject){
      setTimeout(function(){
          console.log("Compressed Successfully");
          resolve({ filepath, uploadUrl: "https://www.upload.com" });// Resolving the promise with both the filepath and upload URL
      }, 4000);
  });
}

// Function to simulate uploading a file with a delay of 2 seconds
function uploadFile(filepath, url){
  return new Promise(function(resolve, reject){
      setTimeout(function(){
          console.log("Uploaded Successfully");
          resolve(); // Resolving the promise when the upload is successful
      }, 2000);
  });
}

// await will always work in async function
// Async function to perform the tasks in sequence
// async function task_todo() {
//     try {
//         // Download the file
//         const fileDownload = await downloadFile("https://www.google.com");

//         // Compress the downloaded file
//         const fileCompress = await compressFile(fileDownload);

//         // Upload the compressed file
//         const fileUpload = await uploadFile(fileCompress.filepath, fileCompress.uploadUrl);
//     }
//     catch(err){
//         console.error(err); // Log any errors that occur during the process
//     }
//     console.log("completed");
// }

// console.log("before calling");

// // Call the async function and handle completion
// task_todo().then(() => console.log("done everything"));

//-----------------------------------  OR ----------------------------------------

async function task_todo() {
    try {
        // Download the file
        Promise.all([
            await downloadFile("https://www.google.com"),
            // Compress the downloaded file
            await compressFile("file.jpg"),
            // Upload the compressed file
            await uploadFile("file.jpg","https://www.google.com")
        ]).then(function () {
            console.log("done everything")
        })  
    }
    catch(err){
        console.error(err); // Log any errors that occur during the process
    }
    console.log("completed");
}


 console.log("before calling");
task_todo().then();