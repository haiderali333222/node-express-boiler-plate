let buildCreateUser= require ('./user')
let userSchema= require ('./userSchema')
// let studentValidator= require ('../validator/')(userSchema)

let createUser=buildCreateUser(userSchema);

module.exports=createUser



