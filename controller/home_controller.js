const Post=require("../models/post");
const User = require("../models/user");


module.exports.home=function(req,res){
  
   //populating whole user data instead of users id 
   Post.find({})
   .populate({
      path: 'comments',
        populate: {
            path: 'user' 
        }
   })
   .populate('user')
   .exec(function(err, posts){

      User.find({},function(req,users) {
      return res.render('home', {
          title: "Codeial | Home",
          posts:  posts ,
          allusers: users  
      });
      });
  })
  //return res.render('home',{ title : "Codial title"});
}



module.exports.signup=function(req,res){
   
   //to restrict the sign pages if user has been already  authenticated  
   if(req.isAuthenticated()){
      return res.redirect("/");
    }

   return res.render('sign-up');
};



module.exports.signin=function(req,res){

   //if i am signed in can't access sign-in and sign-up pages 
   if(req.isAuthenticated()){
      return res.redirect("back");
    }
   return res.render('sign-in');
};

