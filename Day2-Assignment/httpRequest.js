
const http = require("http");
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});


http.createServer((req,res) => {
    if(req.url === "/"){
        res.write("Successfully in the port : " + process.env.ENV_NAME);
        res.end();
    }
        
    if(req.url === "/api"){
        res.write("In api route");
        res.end()
    }
}).listen(process.env.ENV_PORT);

console.log("port : ",process.env.ENV_PORT)