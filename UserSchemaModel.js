const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
   name:String,
   age:Number, 
   phone:Number,
});

module.exports = mongoose.model('users', UserSchema);