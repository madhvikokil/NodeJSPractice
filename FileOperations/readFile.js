const fs = require("fs");

// readfile reads the file
let readFileAsync = fs.readFile('./hello.txt', 'utf8',(error,data) => {
    if (error) {
        throw error;
    }
    console.log("read the file async : ",data);
});

// readFileSync reads the file synchronously
let readFileSync = fs.readFileSync('./hello.txt','utf-8') 
    console.log("read the file sync : ",readFileSync);
   
    process.on("uncaughtException",(error) => {
    console.log("Error : ",error)

})







