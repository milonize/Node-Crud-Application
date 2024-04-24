const mongoose = require('mongoose');

const CrudSchema=mongoose.Schema({
tittle:{
    type:String,
    required:true,
},
descritions:{
    type:String,
    required:true,
},
amount:{
    type:Number,
    required:true,

},
status:{
    type:String,
    enum:['active','inactive']
},
date:{
    type:Date,
    default:Date.now
}
})

module.exports=CrudSchema;
