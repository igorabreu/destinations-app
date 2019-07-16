var mongoose = require("mongoose")

var userSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

var User = (module.exports = mongoose.model("users", userSchema))

module.exports.get = (callback, limit) => {
  User.find(callback).limit(limit)
}
