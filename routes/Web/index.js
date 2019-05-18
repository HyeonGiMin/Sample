const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const fs=require('fs')

router.use(bodyParser.urlencoded({extended: false}))

router.get('/',function(req,res){
      res.render('login')
})

router.get('/reg',function(req,res){
    res.render('registration')
})

router.get('/update/userpass',function(req,res){
    res.render('updatepass')
})

router.get('/main',function(req,res){
    res.render('main')
})

router.get('/select',(req,res) => {
    res.render('selectid')
})

module.exports=router
