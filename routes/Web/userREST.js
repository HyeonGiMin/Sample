var express = require('express');
var router = express.Router();
const mysql=require('mysql')
const bodyparser=require('body-parser')

const client=mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'5team',
    password:'gachon654321',
    database:"5team"
})

router.use(bodyparser.urlencoded({
    extended:false
}))

/* GET home page. */
router.post('/login', function(req, res) {
    res.json({
        "content-type":"json",
        "result_code": 200
    })
});

//회원가입
router.post('/registration',(req,res)=>{



    console.log(req.body.userphone)

    res.json({
        "content-type":"json",
        "result_code": 200
    })


})

//로그아웃
router.get('/logout',function(req,res){
    res.json({
        "content-type":"json",
        "result_code": 200
    })
})

//아이디찾기
router.get('/select/:username/:userphone',(req,res)=>{

    let name=req.params.username
    let phone=req.params.userphone


     client.query('select userID from user_info where username=?,userphone=?',[name,phone],(error,results,field)=>{
      if(error){
    //에러 처리
         res.status(500),send("Select Error")
       }else{
         res.json({
            "result_pass":results[field].userID,
           "content-type":"json",
           "result_code":200
       })
      }


     })

})


//비밀번호 변경
router.put('/update/userpass/:userid/:newpass',(req,res)=>{
    var newpass=req.params.newpass
    var userid=req.params.userid

    client.query('update user_info set userPass = ? where userID=>',[newpass,userid],(error)=>{
        if(error){
            res.status(500),send("Update Error")
        }else{
            res.json({
                "content-type":"json",
                "result_code":200
            })
        }


    })

})




module.exports = router;
