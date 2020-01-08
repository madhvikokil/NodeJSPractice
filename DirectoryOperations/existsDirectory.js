const fs = require("fs");

if(!fs.existsSync("./dir_created11")){
    fs.mkdirSync("./dir_created11");
    console.log("Creted Directory Succesfully");
}
else{
    console.log("Exists");
}