//include Filesystem
var fs = require("fs");

//get data from external textfile
var data = fs.readFileSync("input.txt").toString();
var processedData = data.split(/\r\n/g);
