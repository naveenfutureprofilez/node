// const name = require('./Second.mjs');
// var http = require('http');
// import http from 'http';
// http.createServer(function(request, response){ 
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type':'text/plain'});
//    response.end("Hello From Server");
// }).listen(8081);  

// console.log("Server Running http://127.0.0.1:8081/ ", data);  
// console.log("data") ;   

// import Naveen from './Second.mjs';
// Naveen();


// import URL from 'url';
// console.log("url",URL.href) ;  

// import EventEmitter from 'events';
// class EventEmit extends EventEmitter { }

// const myevent = new EventEmit();

// myevent.on('WaterFull', ()=>{
//    console.log("please turn off");
// });

// myevent.emit('WaterFull');


// const data = require('./User.js');
// const http = require('http');
// http.createServer(function(req, res){ 
//    res.writeHead(200, {'Content-Type':'application/json'});
//    res.write(JSON.stringify(data));
//    res.end();
// }).listen(8081); 
// console.log("Server Running http://127.0.0.1:8081/ ");   


// http.createServer(function(request, response){ 
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type':'text/plain'});
//    response.end("Hello From Server");
// }).listen(8081);  


// console.log(process.argv);
// const fs = require('fs');

// if(process.argv[2]=='create'){
//    fs.writeFileSync(process.argv[3], process.argv[4]);
// } 
// if(process.argv[2]=='remove'){
//    fs.unlinkSync(process.argv[3], process.argv[4]);
// } 

// const fs = require('fs');
// const path = require('path');
// const pathname = path.join(__dirname,'myfiles');
// const filename = `${pathname}/myfile3.txt`
 
// CREATE A FILE
// fs.writeFileSync(filename, pathname);

// UPDATE A FILE
// fs.appendFileSync(filename, 'This Update Contents');

const express = require('express');
const app = express();

app.get('', (req, res)=>{ 
      res.send("This is first request");
});

app.get('/help', (req, res)=>{ 
   res.send("This is help request");
});
 
app.listen(5000);

const dbConnect = require('./mongodb');

const main = async () =>{ 
   let data = await dbConnect();
   data = await data.find().toArray();
   console.log(data); 
} 

main();

