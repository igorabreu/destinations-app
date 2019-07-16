const Destination = require("../models/destinationModel")

exports.index = (req, res) => {
  Destination.get((err, destinations) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      })
    }
    res.json({
      status: "success",
      data: destinations
    })
  })
}

exports.new = (req, res) => {
  var destination = new Destination()
  destination.country = req.body.country
  destination.city = req.body.city
  destination.startDate = req.body.startDate
  destination.endDate = req.body.endDate
  destination.hotelAddress = req.body.hotelAddress
  destination.numberOfTravellers = req.body.numberOfTravellers
  destination.spendingBudget = req.body.spendingBudget
  destination.save(err => {
    res.json({
      destination
    })
  })
}

exports.view = (req, res) => {
  Destination.findById(req.params.destination_id, (err, user) => {
    if (err) res.send(err)
    res.json({
      data: user
    })
  })
}

exports.update = function(req, res) {
  Destination.findById(req.params.destination_id, function(err, destination) {
    if (err) res.send(err)

    destination = {
      country: req.body.country,
      city: req.body.city,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      hotelAddress: req.body.hotelAddress,
      numberOfTravellers: req.body.numberOfTravellers,
      spendingBudget: req.body.spendingBudget
    }

    user.save(function(err) {
      if (err) res.json(err)
      res.json({
        data: contact
      })
    })
  })
}

exports.delete = function(req, res) {
  Destination.remove(
    {
      _id: req.params.destination_id
    },
    function(err, user) {
      if (err) res.send(err)

      res.json({
        status: "success"
      })
    }
  )
}
