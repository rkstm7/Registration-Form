var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect('mongodb://localhost:27017/Database')
var db = mongoose.connection
db.on('error', ()=> console.log("Error in connecting to Database"))
db.once('open', ()=> console.log("Connected to Database"))

app.post("/sign_up", (req, res) => {
    var fullNameame= req.body.fullName
    var username=req.body.username
    var email=req.body.email
    var phoneNumber=req.body.phoneNumber
    var password=req.body.password
    var confirmPassword=req.body.confirmPassword
    var gender=req.body.gender

    var data={
        "fullName":fullNameame,
        "username" :username,
        "email":email,
        "phoneNumber":phoneNumber,
        "password":password,
        "confirmPassword":confirmPassword,
        "gender":gender
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully")
    })
    return res.redirect('signup_succesful.html')
})

app.get('/', (req, res) => {
    res.send("Server Connection is Successfully Connected")
    res.set({
        "Allow-acces-Allow-origin":'*'
    })
    return res.redirect('index.html')
}).listen(3000);

console.log("listening on port 3000")