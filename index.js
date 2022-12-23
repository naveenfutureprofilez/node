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




app.listen(5000, ()=>{ 
   console.log('server running .....');
});   