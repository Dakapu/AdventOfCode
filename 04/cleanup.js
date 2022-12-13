//include Filesystem
var fs = require("fs");

//get data from external textfile
var data = fs.readFileSync("example.txt").toString();
var processedData = data.split(/\r\n/g);

processedData.forEach((cleaningPair) => {
  //remove dash and split the pair in two parts
  //careful: Pair contains TWO STRINGS not NUMBERS
  let pair = cleaningPair.replace(/-/g, "").split(",");

  //function to retreive the whole set of numbers from the one number given
  //convert to number first
  let firstElf = layOutNumbers(pair[0]);
  let secondElf = layOutNumbers(pair[1]);

  console.log();
});

function layOutNumbers(num) {
  let result = num[0];
  let start = num[0];
  let end = num[1];

  for (let i = start; i <= end; i++) {
    //count up to end and add the number to result
    result += i;
  }
  //chop of first element of result as it had to be initilised first
  console.log(result.substring(1));
}
