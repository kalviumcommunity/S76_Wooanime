const mongoose = require('mongoose')
const ItemSchema=mongoose.Schema({
    AnimeName:{
        type:String,
        required:true
    },
    Genre:{
      type:[String],
      required:true
    },
    description:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    studio:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Item',ItemSchema);
