const authController = require("../../controllers/auth/Auth.controller");


const router = require("express").Router();

router.post("/login", authController.login);




module.exports = router;