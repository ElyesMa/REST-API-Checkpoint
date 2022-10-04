const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  Name: String,
  Email: {type: String,unique: true},
  Password: {type: String,required: true},
});
module.exports = mongoose.model('User', userSchema);
