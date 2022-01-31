const express=require("express");
const homecontroller=require("../controller/home_controller");
const router=express.Router();
const users=require("./user")


router.get("/",homecontroller.home);
router.use("/user",users);
router.get("/sign-up",homecontroller.signup);
router.get("/sign-in",homecontroller.signin);
router.use("/posts",require('./post'));
router.use("/comment",require('./comment'));

console.log("router file");


module.exports=router;
