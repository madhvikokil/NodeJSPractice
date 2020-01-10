'use strict';

var _fs = require('fs');

(0, _fs.appendFile)('./hello.txt', 'data to append', function (err) {
    if (err) throw err;
    console.log('Saved!');
});