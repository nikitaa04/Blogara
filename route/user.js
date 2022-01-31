const express= require("express");
const router=express.Router();
const passport=require("passport");
const localpassport=require("../Config/passport-local-strategy");
const usercontroller=require("../controller/user_controller");

router.get("/profile/:id",passport.checkAuthentication,usercontroller.profile);

router.get("/likes",usercontroller.likes);

router.post("/create",usercontroller.create);



//router.post("/create-session",usercontroller.createsession);

router.get("/delete",usercontroller.delete);


// use passport as a middleware to authenticate
router.post("/create-session",passport.authenticate(

    'local',
    { failureRedirect : '/sign-in'},
),usercontroller.createsession);


console.log("users route");

module.exports =router; 
