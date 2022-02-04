const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  })

  module.exports = mongoose.model('Posts', postSchema);
  