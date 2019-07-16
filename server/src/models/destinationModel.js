var mongoose = require("mongoose")

var destinationSchema = mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  hotelAddress: {
    type: String,
    required: true
  },
  numberOfTravellers: {
    type: String,
    required: true
  },
  spendingBudget: {
    type: Number,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

var Destination = (module.exports = mongoose.model(
  "destinations",
  destinationSchema
))

module.exports.get = (callback, limit) => {
  Destination.find(callback).limit(limit)
}
