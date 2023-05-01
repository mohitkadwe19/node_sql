const homeController = require("../controller/home.controller");

const router = require("express").Router();

router.post("/create-user", homeController.createUser);

router.get("/getUsers", homeController.getUsers);

module.exports = router;
