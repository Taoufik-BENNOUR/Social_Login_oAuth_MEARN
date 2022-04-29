const express = require('express')
const passport = require('passport')

const Router = express.Router()


Router.get('/login/failed',(req,res)=>{
    res.status(401).json({success:false,msg:"failed"})
})
Router.get('/login/success',(req,res)=>{
    if(req.user){
res.status(200).json({success:true,msg:"successfull",
user:req.user})
    }
    // res.status(401).json({success:false,msg:"failed"})
})
Router.get('/logout',(req,res)=>{
    req.logout();
    // res.redirect(process.env.CLIENT_URI)
})

Router.get('/google',passport.authenticate("google",{scope:["profile"]}))
Router.get('/google/callback',passport.authenticate("google",{
    successRedirect:process.env.BASE_URI,
    failureRedirect:"/login/failed"
}))

module.exports = Router