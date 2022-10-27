const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const mysql=require("mysql2");
const cors = require("cors");

// const fileUpload = require('express-fileupload');
// const expressLayouts = require('express-ejs-layouts');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"matrimony_app"
})
//profilepage info store
app.post("/signup",(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
    var gender=req.body.gender;
    var birthdate=req.body.birthdate;
    var mno=req.body.mno;
    var religion=req.body.religion;
    var country=req.body.country;
    var state=req.body.state;
    var language=req.body.language;
    var height=req.body.height;
    var edu=req.body.edu;
    var occu=req.body.occu;
    var sallary=req.body.sallary;
    var marstat=req.body.marstat;
    var image=req.body.image;
    var pack=req.body.pack;
    var flag=req.body.flag;
    var address=req.body.address;
    var zodiac=req.body.zodiac;
    var hobby=req.body.hobby;
    var about=req.body.about;

    const sqlInsert="insert into profile (name,email,password,birthdate,gender,mno,religion,country,state,language,height,edu,occu,sallary,marstat,image,pack,flag,address,zodiac,hobby,about) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    const sqlusers="insert into users (emailid,pass) values(?,?);"
    db.query(sqlInsert,[name,email,password,birthdate,gender,mno,religion,country,state,language,height,edu,occu,sallary,marstat,image,pack,flag,address,zodiac,hobby,about],(error,result)=>{
        res.send(result);
    })
    db.query(sqlusers,[email,password],(error,result)=>{
        console.log( result);
    });
});
app.get("/login",(req,res)=>{
    var email=req.query.email;
    var password=req.query.password;
    const sqlselect="select id from users where emailid=? and pass=?;";
    db.query(sqlselect,[email,password],(error,result)=>{
        console.log(result);
        res.send(result);
});
});

app.get("/searchresults",(req,res)=>{
    var gender=req.query.gender;
    
    const sqlselect="select * from profile where gender=? ;";
    db.query(sqlselect,[gender],(error,result)=>{
        console.log(result);
        res.send(result);
});
});

app.get("/profilepage/get-data",(req,res)=>{
    var email=req.query.email;
    const sqlselect="select * from profile where email=?;";
    db.query(sqlselect,[email],(error,result)=>{
        res.send(result);
});
});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});

