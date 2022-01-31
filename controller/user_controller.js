const User = require("../models/user");



module.exports.profile = function(req,res){
 
   /* if(req.cookies.codeial){

        User.findById(req.cookies.codeial,function(err,user){
            if(user){
            return res.render('profile',{title: "Title",profile : user}); 
            
            }

            else {
                 return res.redirect("/sign-in"); return;


                 }
        });
    }*/   
    
    
    
    User.findById(req.params.id, function(err, user){
        return res.render('profile', {
            title: 'User Profile',
            user: user
        });
    });
          

}





module.exports.likes = function(req,res){

    return res.end("This is likes page");
}






module.exports.create = function(req,res){

    if(req.body.password!=req.body.confirmpassword)
    {
        return res.redirect("back");
    }
  
    User.findOne({email: req.body.email},function(err,user){
        if(err){ console.log("Error",err);}
        if(!user){ 
            
            User.create(req.body,function(req,user){
                if(err){ console.log("error",err); return;}
                 else {  return res.redirect("/sign-in");}
            });

        }
                  
        else 
          { 
              return res.redirect("/sign-in");
            }  
        
    });

};






module.exports.createsession = function(req,res){

    /*User.findOne({email: req.body.email},function(err,user){
       
        if(err){  console.log("ERROR",err); return;}

         if(user){
            
            if(user.password!=req.body.password){ res.redirect("back");}

            else { 
                console.log(user._id);
                res.cookie("user_id",user._id);
               return res.redirect("/user/profile");
        }
            
       if(!user) { return res.redirect("/sign-up");} 

    }

});*/

return res.redirect('/');

}




module.exports.delete = function(req,res){
     
    req.logout();
    return res.redirect("/sign-in");
   
}


