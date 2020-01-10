const express = require('express');
const http = require("http");

require('dotenv').config();

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