const express =  require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res)=>{ 
   res.send("done"); 
}); 

app.listen(5000, ()=>{ 
   console.log('server running .....');
});   