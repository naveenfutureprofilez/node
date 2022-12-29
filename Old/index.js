const express =  require('express');
const app = express();
require('./config');
app.use(express.json());

app.get('/allusers', (req, res)=>{ 
   res.send("done"); 
});  

const Users = require('./UserSchemaModel');
app.post('/adduser', async (req, res)=>{ 
   let user = await Users(req.body);
   let result = await user.save();
   res.send(result);
});  

app.delete('/adduser/:_id', async (req, res)=>{ 
   let result = await Users.deleteOne(req.params);
   console.log(req.body);
   res.send(result); 
});   

app.put('/adduser/:_id', async (req, res)=>{ 
   let result = await Users.updateOne( 
      req.params, {$set : req.body}
   );
   res.send(result); 
});   


app.get('/search/:key', async (req, res)=>{ 
   let data = await Users.find({
      "$or" : [
         { name: {$regex:req.params.key}}
      ]
   });
   res.send(data);  
}); 


const multer = require('multer');

const upload = multer({
   storage : multer.diskStorage({ 
      destination : function(req, file , cb){ 
         cb(null, 'uploads');
      },
      filename : function(req, file, cb){ 
         console.log("file => ", file);
         cb(null, file.originalname + Date.now() +'.jpg');
      }
   })
}).single('myfile');



app.post('/uploadfile', upload, async (req, res)=>{ 
   res.send("Done");   
}); 



app.listen(5000, ()=>{ 
   console.log('server running .....');
});   