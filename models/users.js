const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  experience: Number,
  session: []
})

mongoose.model('users', userSchema)
