const mongoose = require('mongoose');

const CartoonSchema = new mongoose.Schema({
  name: {type: String, require: true, unique: true},
  show: {type: String, require: true},
  skills: {type: Array},
  avatar: {type: String, require: true},
})

// cartoonSchema.statics.findByShow = function(show, cb){
//   return this.find({show: show})
// }

const cartoon = mongoose.model('cartoon', CartoonSchema) //I will make your collection but plural!

module.exports= cartoon;
