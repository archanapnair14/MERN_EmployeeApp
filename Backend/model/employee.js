const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
  
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  position: {
    type: String,
  },
  salary:{
    type:Number,
  }
  
});
const EmployeeModel = mongoose.model("employees", employeeSchema);
module.exports = { EmployeeModel };
