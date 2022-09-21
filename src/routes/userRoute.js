const express = require("express");
const defaultController = require("../controllers/defaultController");

const router = express.Router();
router.get("/", defaultController.defaultController);

const userValidation = require("../controllers/user/user.validator");

const { addUser } = require("../controllers/user/user.controller");
router.post("/addUser", userValidation, addUser);

const {  getUsers } = require("../controllers/user/user.controller");
router.get("/getUsers", getUsers);

module.exports = router;
