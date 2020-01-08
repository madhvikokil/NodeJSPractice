let http = require('http');

http.createServer((req,res) => {
    if(req.url === "/"){
        res.write("Successfully in the port");
        res.end();
    }
        
    if(req.url === "/api"){
        res.write("In api route");
        res.end()
    }
}).listen(8085);

console.log("HTTP Request");
