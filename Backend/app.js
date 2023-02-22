const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bcrypt = require("bcrypt");
const BodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const auth = require("./middlewear/auth");
const { EmployeeModel } = require("./model/employee");
const { userModel } = require("./model/users");

const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect Database
connectDB();

//API Calls

app.post("/signin", async (req, res) => {
  var getEmail = req.body.email;
  var password = req.body.password;

  let result = userModel.find({ email: getEmail }, (err, data) => {
    if (data.length > 0) {
      const passwordValidator = bcrypt.compareSync(password, data[0].password);
      if (passwordValidator) {
        jwt.sign(
          { email: getEmail, id: data[0]._id },
          "ictacademy",
          { expiresIn: "1d" },

          (err, token) => {
            if (err) {
              res.json({ status: "error", error: err });
            } else {
              res.json({ status: "success", data: data, token: token });
            }
          }
        );
      } else {
        res.json({ status: "failed", data: "invalid password" });
      }
    } else {
      res.json({ status: "failed", data: "invalid email id" });
    }
  });
});

//Signup
app.post("/api/register", async (req, res) => {
  // console.log(req.body);
  // console.log(req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (user) throw Error("User already exists");

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error("Something went wrong with bcrypt");

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error("Something went wrong hashing the password");

    let data = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    });
    console.log(data);
    await data.save();

    res.json({ status: "success", data: data });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
//get data from db  using api '/api/employeelist'
app.get("/api/employeelist", async (req, res) => {
  
  try {
    const data = await EmployeeModel.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//send data from db using api '/api/employeelist'

app.post("/api/employeelist", async (req, res) => {
  const data = new EmployeeModel({
    name: req.body.name,
    location: req.body.location,
    position: req.body.position,
    salary: req.body.salary,
  });
  try {
    const Data = await data.save();
    res.status(200).json(Data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  console.log(data);
});

//delete a employee data from db by using api '/api/employeelist/:id'
app.delete("/api/employeelist/:id", auth, async (req, res) => {
  try {
    var id = req.params.id;
    var data = req.body;
    const result = await EmployeeModel.findOneAndDelete({ _id: id }, data);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update  a employee data from db by using api '/api/employeelist'

app.put("/api/employeelist", (req, res) => {
  var name = req.body.name;
  var data = req.body;
  EmployeeModel.findOneAndUpdate({ name: name }, data, (err, data) => {
    if (err) {
      res.json({ status: "error", error: err });
    } else {
      res.json({ status: "updated", data: data });
    }
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));
