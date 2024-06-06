const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/pinterest")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  fullname: {
    type: String,
  },
});

userSchema.plugin(plm)

module.exports = mongoose.model('User', userSchema);

