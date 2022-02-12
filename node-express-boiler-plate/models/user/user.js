let buildCreateUser=function(userValidator){

return (
    {name,
    email,
    phone_no,
    organization
    } ={}) => {
        try{
            let {error,value}=userValidator.validate({name,email,phone_no,organization})  
            if(error) throw error
          
        }
        catch(e){
           
            throw new Error(e);
            
        }

        return{
            name: name,
            email:email,
            phone_no: phone_no,
            organization: organization 

        }
    }
}

module.exports=buildCreateUser;


