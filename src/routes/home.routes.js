const homeController = require("../controller/home.controller");

const router = require("express").Router();

router.post("/create-user", homeController.createUser);

router.get("/getUsers", homeController.getUsers);

router.delete("/deleteUser/:id", homeController.deleteUser);

router.put("/updateUser/:id", homeController.updateUser);

router.post("/updateUsers/:name", homeController.updateUsers);

module.exports = router;
