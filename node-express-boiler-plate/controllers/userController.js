const { json } = require('body-parser');
const mongoose = require('../db/mongodb/connection');
const createUser = require('../models/user');
require('../db/mongodb/models/user')
const User = mongoose.model('User')



async function saveStudent(req,res){
   
    let values=req.body;
    let newUser
  try{
        newUser= createUser({
        name:values.name,
        email:values.email,
        phone_no:values.phone_no,
        organization:values.organization

    })
    
 
}
  catch (err){
        console.log('Errored' + err)
        res.status(422).send('user not validated')
        return ;
}

    
        let user=  new User(newUser);
    
   
         
                await user.save().then(()=>{

                 console.log ('user is saved');
                 res.send('saved')
                 

                     }).catch((err)=>{
                       
                        console.log("error is " +err)
                        res.status(422).send('errror while saving')
                        return err;
                            })
                   }

    

module.exports.saveStudent=saveStudent;