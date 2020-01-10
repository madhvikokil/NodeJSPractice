let http = require('http');
const db = require("db");
require('dotenv').config()
const port = process.env.DB_PORT ;
const name = process.env.DB_NAME


http.createServer((req,res) => {
    if(req.url === "/"){
        res.write("Successfully in the port",name);
        res.end();
    }
        
    if(req.url === "/api"){
        res.write("In api route");
        res.end()
    }
}).listen(port);


console.log("fggg");
console.log("HTTP Request");
console.log("process env :",process.env.PORT);
