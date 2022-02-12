let mongoose = require('../connection')

let Schema = mongoose.Schema
let userSchema = new Schema({
  name: {
      type:String,
      required:true
    
    },
  email:{
      type:mongoose.SchemaTypes.String,
      required:true,
      unique:true,
      index:true
  } ,
  phone_no:{
      type:Number,
      required:false
  },

  
  organizations: Array
}

)

let User = mongoose.model('User', userSchema)

module.exports = User