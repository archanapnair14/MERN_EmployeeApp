import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const sendDataToAPI = () => {
    // e.preventDefault();
    axios
      .post("http://localhost:3001/api/employeelist", {
        name,
        location,
        position,
        salary,
      })
      .then(() => {
        navigate("/Read");
      });
  };

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg  bg-secondary navbar-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/Read">
                    Back Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div></div>
      <div>
        {" "}
        <section className="Background">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-6">
                <div className="card card-form">
                  <div className="row g-0">
                    <form>
                      <div className="card-body p-md-5 text-black bg-light">
                        <div className="d-flex justify-content-center pt-3">
                          <h1 className="fw-Bolder mb-3 pb-3 headeing">
                            ADD EMPLOYEE
                          </h1>
                        </div>

                        <div className="form-outline mb-2">
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

                        <div className="form-outline mb-2">
                          <input
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location"
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            name="position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            placeholder="Position"
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            required
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            name="salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            placeholder="Salary"
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>

                        <div className="d-flex justify-content-center pt-3">
                          <button
                            onClick={sendDataToAPI}
                            type="button"
                            className="btn btn-success btn-lg ms-2"
                          >
                            Submit
                          </button>
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

export default Create;
