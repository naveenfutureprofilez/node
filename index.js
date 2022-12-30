const express = require('express');
const cors = require('cors');
const app = express();
require('./db/config');
app.use(express.json());
app.use(cors());
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