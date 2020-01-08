const fs = require("fs");

// rename sync
fs.rename("./hello.txt","./helloasync.txt",error=>{
    if(error){
        throw error;
    }
    console.log("Renamed");
})

// rename sync
fs.renameSync("./helloasync.txt","hell.tx");