const dbConnect = require('./mongodb');

const InsertData = async ()=> { 
   const db = await dbConnect(); 
   console.log("db", db);
   // db.insert({name:'My User', age:23});

   // update data
   // let insertd = await db.insert(
   //    [
   //       {name:'My User', location:'Jaipurr,India' },
   //       {name:'My User2', location:'Jaipurr,India' },
   //    ]
   //    );
   // if(insertd.acknowledged){ 
   //    console.log("Data Updated");
   // }

   // update data / update  - All / updateOne
   // let update = await db.update({name:'My User'}, {$set:{location:'Jaipur,India'}});
   // if(update.acknowledged){ 
   //    console.log("Data Updated");
   // }

   // Delete data = deleteMany and delete
   // let deletedata = await db.deleteMany({name:'My User'});
   // if(deletedata.acknowledged){ 
   //    console.log("Data Updated"); 
   // }

}
InsertData();