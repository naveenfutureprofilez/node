const express = require('express');
const app = express();
require('./db/config');
app.use(express.json());

const User = require('./db/Users'); 


app.get('/check', (req, res)=>{
   res.send("STATUS - ACTIVE");
});

app.post('/signup', async (req, res)=>{
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
});



app.listen(5000, ()=>{console.log("===> SERVER RUNNINGGGGG")});