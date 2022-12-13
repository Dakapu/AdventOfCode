//include Filesystem
var fs = require("fs");

/*

example:

    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 
*/

let container = [["N", "Z"], ["D", "C", "M"], ["P"]];

/*

input

[N] [G]                     [Q]    
[H] [B]         [B] [R]     [H]    
[S] [N]     [Q] [M] [T]     [Z]    
[J] [T]     [R] [V] [H]     [R] [S]
[F] [Q]     [W] [T] [V] [J] [V] [M]
[W] [P] [V] [S] [F] [B] [Q] [J] [H]
[T] [R] [Q] [B] [D] [D] [B] [N] [N]
[D] [H] [L] [N] [N] [M] [D] [D] [B]
 1   2   3   4   5   6   7   8   9 


let container = [
  ['N', 'H', 'S', 'J', 'F', 'W', 'T', 'D'],
  ['G', 'B', 'N', 'T', 'Q', 'P', 'R', 'H'],
  ['V', 'Q', 'L'],
  ['Q', 'R', 'W', 'S', 'B', 'N'],
  ['B', 'M', 'V', 'T', 'F', 'D', 'N'],
  ['R', 'T', 'H', 'V', 'B', 'D', 'M'],
  ['J', 'Q', 'B', 'D'],
  ['Q', 'H', 'Z', 'R', 'V', 'J', 'N', 'D'],
  ['S', 'M', 'H', 'N', 'B'],
];

*/

//get data from external textfile
var data = fs.readFileSync("example.txt").toString();
var processedData = data.split(/\r\n/g);

//command text example: move 1 from 2 to 1

processedData.forEach((command) => {
  //remove words/whitespaces from commands
  let regex = /(move)|(from)|(to)|( )/g;
  //Save commands as array
  let step = [...command.replaceAll(regex, "")];
});
