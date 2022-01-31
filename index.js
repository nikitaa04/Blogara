const express=require("express");
const path=require("path");
const app=express();
const port=5000;
const route=require("./route/index");
const cookieparser=require("cookie-parser");
const users=require("./models/user")
const db=require("./Config/mongoose");
//used for session cookie
const session=require("express-session");
const passport=require("passport");
const localpassport=require("./Config/passport-local-strategy");
//const mongostr = require("connect-mongo")(session);
/*const sassmidleware=require("node-sass-middleware");


app.use(sassmidleware({

    src: "./assets/scss",
     dest: "./assets/css",
     debug: true ,
     outputStyle: 'extended',
     prefix:  '/css' 

 }));*/



 
app.use(express.urlencoded());
app.use(express.static("./assets"));
app.use(cookieparser());




//    setting ejs
 app.set("view engine","ejs");
 app.set("view"+path.join(__dirname+"views"));

//mongodb is used to store session in db 
 app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
     /* store : new MongoStore ( 
       { 
            mongooseConnection : db,
            autoRemove : 'disable' 
    }, function(err){        
        console.log(err||" connected to mono-store");
    }
    )*/

}));


 app.use(passport.initialize());
 app.use(passport.session());

 app.use(passport.setAuthenticatedUser);

 app.use("/",route);
 




app.listen(port,function(err){
    if(err){ console.log("err",err);  return; }
    console.log("server is running at port",port);
});



