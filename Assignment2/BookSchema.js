const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    employeeName : String,
    employeePost : String,
    employeeSalary : String

}, { collection : "employee"})
module.exports = mongoose.model("Book",EmployeeSchema);