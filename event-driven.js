const fs = require("fs");
let file = "./hello.txt";
const readFileAsArray = function(file, cb) {
    fs.readFile(file, function(err, data) {
      if (err) {
        return cb(err);
      }
      console.log(data);
      const lines = data.toString().trim().split('\n');
      cb("lines :",lines);
    });
  };
  