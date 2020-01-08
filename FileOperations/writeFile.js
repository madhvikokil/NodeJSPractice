const fs = require("fs");
const data = "The implications of this are a common source of confusion."
const dataWritten = fs.writeFile('./hello.txt', data, 'utf8', (error,data) => {
    if(error){
        throw error;
    }
    console.log(dataWritten);
    
});

process.on("uncaughtException",(error)=>{
    console.log("uncaught exception");
})

const dataWritten2 = fs.writeFileSync('./hello.txt', "Added", 'utf8');

