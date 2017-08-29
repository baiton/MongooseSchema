const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/Cartoons');  //I will make your DB!
const CartoonModel = require('./models/Cartoon')

function getAllCartoons (){
  return CartoonModel.find();
}
function newCharacter (info){
  let character = new CartoonModel(info);
  character.save(function(err){
    console.log(err);
  })
  return Promise.resolve('success');
}

function getChar(characterId){
  let alltoons = CartoonModel.find();
  let chosenCharacter = {};
  for (i=0; i<alltoons.length; i++){
    if (cartoons.id === characterId){
      chosenCharacter = character[i];
    }
  }
}

// CartoonSchema.query.show = function (show, callback) {
//     return this.where({show: {$match: "Adventure Time"}});
// };

function getCharById(id){
  return CartoonModel.findOne({'_id': id}).catch(function(err){
    console.log("Error!", err);
  })
}

function deleteCharById(id){
  return CartoonModel.findByIdAndRemove({'_id': id}).catch(function(err){
    console.log("Error!", err);
  })
}

function editCharById(id){
  return CartoonModel.updateOne({'_id': id}).catch(function(err){
    console.log("Error!", err);
  })
}


module.exports = {
  getAllCartoons,
  newCharacter,
  getCharById,
  deleteCharById,
  editCharById
}
