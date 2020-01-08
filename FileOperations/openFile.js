const fs = require("fs");

// open the file 
fs.open('newfile_3.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('File is opened in write mode.');
  }); 