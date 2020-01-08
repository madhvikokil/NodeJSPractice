const fs = require("fs");

// mkdir to create directory async

fs.mkdir("./dir_created13",error => {
    if(error) throw error
});
console.log("Created Sync");

// mkfirSync to create directory async
fs.mkdirSync("./dir_cretaed10");
console.log("Created Async");