const dbConnect = require('./mongodb');
const express = require('express');
const app = express();
const mongo = require('mongodb');
app.use(express.json());
app.listen(5000);


app.get('/users', async (req, res)=>{ 
   let db = await dbConnect();
   data = await db.find().toArray();
   res.send(data);
}); 


app.post('/users', async (req, res)=>{ 
   let db = await dbConnect();
   let result = await db.insert(req.body);
   if(result.insertedCount > 0){ 
      console.log(" data added => ", req.body);
   } 
   res.send(result);   
}); 


app.put('/users/:name', async (req, res)=> { 
   let db = await dbConnect();
   let result = db.updateOne({name:req.params.name}, {$set:req.body});
   res.send(result);  
});


app.delete('/users/:id', async (req, res)=> { 
   const db = await dbConnect();
   let result = await db.deleteOne({_id:new mongo.ObjectId(req.params.id)})
   res.send(result);
});







