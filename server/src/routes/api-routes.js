const router = require("express").Router()
const userController = require("../controllers/userController")
const destinationController = require("../controllers/destinationController")
const authenticationController = require("../controllers/authenticationController")

//root
router.get("/", (req, res) => {
  res.json({
    message: "working"
  })
})

//Users
router
  .route("/users")
  .get(userController.index)
  .post(userController.new)

router
  .route("/users/:user_id")
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete)

router
  .route("/destinations/")
  .get(destinationController.index)
  .post(destinationController.new)

router
  .route("/destinations/:destination_id")
  .get(destinationController.view)
  .patch(destinationController.update)
  .put(destinationController.update)
  .delete(destinationController.delete)

//Authentication
router.route("/login").post(authenticationController.auth)

module.exports = router
