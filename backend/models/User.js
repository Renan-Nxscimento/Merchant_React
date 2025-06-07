const mongoose = require('mongoose');

const {cartSchema} = require('./Cart')

const userSchema = new mongoose.Schema({
  name:{
     type: String,
     required: true 
  },
  nickname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  favorite_products: [{
    productname: {
      type: String,
      required: true
    }
  }],
  cart: {
    type: [cartSchema]
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
