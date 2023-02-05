const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});
const userModel = Mongoose.model("users", userSchema);
module.exports = { userModel };
