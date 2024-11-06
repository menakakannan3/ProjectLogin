const {Signup, Login} = require ("../controllers/Authcontroller");
const router = require("express").Router();
const {userVerification} =require("../middlewares/Authmiddle")
router.post("/signup", Signup);

router.post("/login", Login);

router.post("/", userVerification)
module.exports = router;
