const mongooes = require('mongooes');
const UserSchema = new mongooes.Sechema({
   name:string,
   age:number, 
   phone:any,
});

module exports = mongooes.model('users', UserSchema);