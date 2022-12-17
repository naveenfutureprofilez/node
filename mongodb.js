const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'naveendb';

async function dbConnect() { 
   const result = await client.connect();
   db = result.db(database);
   return db.collection('users'); 
} 

module.exports = dbConnect;