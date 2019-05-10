'use strict';
// var greet=require('./hello');
// var s='Michal';
// greet(s);

var fs=require('fs');
fs.readFile('a.png',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data.length+'bytes');
    }
})
var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
try{
    var data=fs.readFileSync("b.txt",'utf-8');
    console.log(data);
}catch(err){

}

var rs=fs.createReadStream('b.txt','utf-8');
rs.on('data',function(chunk){
    console.log('DATA');
    console.log(chunk);
})
rs.on('end',function(){
    console.log('END');
})
rs.on('error',function(err){
    console.log('ERROR'+err)
})

var ws1=fs.createWriteStream('output1.txt','utf-8');
rs.pipe(ws1);
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

