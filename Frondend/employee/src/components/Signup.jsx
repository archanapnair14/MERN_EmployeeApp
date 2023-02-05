import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const userAuthentication = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
    } else {
      const userData = {
        name: name,
        email: email,
        password: password,
      };
      // e.preventDefault();
      axios
        .post(`http://localhost:3001/api/register/`, { name, email, password })
        .then(() => {
          navigate("/");
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-6">
                <div className="card card-form">
                  <div className="row g-0">
                    <form>
                      <div className="card-body p-md-5 text-black bg-light">
                        <div className="d-flex justify-content-center">
                          <h1 className="fw-Bolder mb-3 pb-3 headeing">
                            Signup
                          </h1>
                        </div>

                        <div className="form-outline mb-2 p-3">
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Name"
                            required
                          />
                        </div>

                        <div className="form-outline mb-2 p-3">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="form-outline mb-2 p-3">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            required
                          />
                        </div>
                        
                        <div className="d-flex justify-content-center pt-3">
                          <button
                            onClick={userAuthentication}
                            type="button"
                            className="btn btn-primary btn-lg ms-2"
                          >
                            Submit
                          </button>
                          </div>
                          <div className="mt-3">
                          <a href="/">LogIn</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default Signup;
