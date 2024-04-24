var express= require('express');
var app=express();
var port=8000;
var cors=require('cors');

var mongoose=require('mongoose');
app.use(cors());
var router=require('./router');
app.use(express.json());
app.use('/api/tasks',router);


var mongooseurl="mongodb://127.0.0.1:27017/raagini?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1"
mongoose.connect(mongooseurl,{useNewUrlParser:true})
.then(success=>{
    console.log("connected to mongodb");
    app.listen(port,()=>{
        console.log("server is running");
    });
})
    .catch(error=>{
        console.log("error")
   
});