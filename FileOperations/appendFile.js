import { appendFile } from "fs";
appendFile('./hello.txt', 'data to append', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
