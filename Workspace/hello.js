'use strict';

var s='Hello';

function greet(name){
    console.log(s+','+name+'!');
}
var fs = require('fs');

var rs = fs.createReadStream('b.txt');
var ws = fs.createWriteStream('output.txt');

rs.pipe(ws);
module.exports=greet;