const express = require("express");
let app = express();
const mongoose = require("mongoose");
const EmployeeInfo = require("./BookSchema.js");
require('dotenv').config()
const bodyParser = require("body-parser");
 
let myDb = "mongodb://localhost/employeeData";
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

mongoose.connect(myDb,{
    useNewUrlParser: true,
    useUnifiedTopology: true});

app.get("/",function(req,res){
    res.send("here");
      
})

// get all the collections of employeeData's database
app.get("/employee",function(req,res){

    EmployeeInfo.find({},function(error,employee){
        if(error){
            res.send("error has occured");
        } else{
            res.send(employee);
        }
    })
})

// get the first collections of employeeData's database
app.get("/employee/:id",function(req,res){

    EmployeeInfo.findOne({
        _id : req.params.id
    },function(error,books){
        if(error){
            res.send("error has occured");
        } else{
            res.send(books);
        }
    })
})

// add 
app.post("/employee",function(req,res){
    let newEmployee = new EmployeeInfo();
    newEmployee.employeeName = req.body.employeeName;
    newEmployee.employeePost = req.body.employeePost;
    newEmployee.employeeSalary = req.body.employeeSalary;

    newEmployee.save(function(error,employee){
        if(error){
            res.send("Error has occured");
        } else{
            res.send(employee);
        }
    })
})

// update 

app.put("/employee/:id",function(req,res){
    EmployeeInfo.findOneAndUpdate({
        _id : req.params.id
    },{$set:
        {employeeName : req.body.employeeName, upsert :true},
        function(error,newEmployee){
            if(error) {
                console.log("errro ocured");
            } else{
                console.log(newEmployee);
                res.status(204);
            }
    }})})

// delete 

app.delete("/employee/:id",function(req,res){
    EmployeeInfo.findByIdAndRemove({
        _id : req.params.id
    },function(error,employee){
        if(error){
            res.send("error has occured");
        } else{
            res.send(employee);
            res.send(204);
        }
    })
})

app.listen(port,function(){
    console.log("app listening on port "+port);
})