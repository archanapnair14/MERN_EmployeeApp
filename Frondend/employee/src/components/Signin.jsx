import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userAuthentication = () => {
    const userData = {
      email: username,
      password: password,
    };
    console.log(userData);
    axios.post(`http://localhost:3001/signin`, userData).then((response) => {
      console.log(response.data);

      if (response.data.status == "success") {
        let token = response.data.token;
        let userId = response.data.data[0]._id;
        let useremail = userData.email;
        console.log(useremail);

        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userId", userId);
        history.push('/protected');


        if (useremail == "admin@gmail.com") {
          navigate("/Read");
        } else {
          navigate("/ViewEmployeedata");
        }
      } else {
        alert("Invalid user");
      }
    });
  };
  return (
    <div>
      <Navbar />
      <div>
        <section>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-6">
                <div className="card">
                  <div className="row g-0">
                    <form>
                      <div className="card-body p-md-5 text-black bg-light">
                        <div className="d-flex justify-content-center">
                          <h1 className="fw-Bolder mb-3 pb-3 headeing">
                            Login
                          </h1>
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="email"
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <br />
                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                          <button
                            onClick={userAuthentication}
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Login
                          </button>
                        </div>
                        <div className="mt-4">
                          <a href="/signup">Sign Up</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer></footer>
    </div>
  );
};

export default Signin;
