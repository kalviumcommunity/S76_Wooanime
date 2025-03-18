const mongoose = require('mongoose')
const ItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  studio: {
    type: String,
    required: true,
  },
  imageurl:{
    type:String,
    required:true
  }
});
module.exports=mongoose.model('Item',ItemSchema);
