import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 120,
  height: 120,
  facingMode: "user",
};

function Form(props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    mothersName: "",
    fathersName: "",
    address: "",
    gender: "",
    pincode: "",
    course: "",
    email: "",
    dob: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
  };

  const inputChange = (e) => {
    setUsers((prevUsers) => ({
      ...prevUsers,
      [e.target.name]: e.target.value.trim(),
    }));
    // console.log(users);
  };

  const resetButton = (e) => {
    e.preventDefault();
    setUsers({
      firstName: "",
      lastName: "",
      mothersName: "",
      fathersName: "",
      address: "",
      gender: "",
      pincode: "",
      course: "",
      email: "",
      city: "",
      state: "",
      dob: "",
    });
    console.log("fghj");
  };

  const dates = new Date().toISOString().split("T")[0];
  console.log(dates);
  return (
    <>
      <section
        className="backgroundColor"
        style={{ height: "100%", overflow: " hidden" }}
      >
        <div className="container py-1 h-100">
          <div className="  row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card  my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    {props.isCaptureEnable || (
                      <button
                        type="button"
                        onClick={props.openButton}
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          marginBottom: "10%",
                          marginTop: "33.6%",
                          marginLeft: "18%",
                        }}
                        className="btn btn btn-lg position-absolute"
                      >
                        Capture Image
                      </button>
                    )}

                    {props.isCaptureEnable && (
                      <>
                        <div>
                          <button
                            className="cimage"
                            onClick={props.closeButton}
                          >
                            X
                          </button>
                        </div>
                        <div>
                          <Webcam
                            style={{ marginLeft: "7%", marginTop: "20%" }}
                            audio={false}
                            width={540}
                            height={300}
                            ref={props.webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                          />
                        </div>
                        <button
                          style={{
                            borderWidth: 1,
                            borderColor: "black",
                            marginBottom: "55% ",
                            marginLeft: "18%",
                          }}
                          onClick={props.capture}
                          type="button"
                          className="btn btn btn-lg position-absolute"
                        >
                          Capture Image
                        </button>
                      </>
                    )}

                    {/* {props.url && (
                      <>
                        <br />
                        <br />
                        <div>
                          <button
                            onClick={props.clearButton}
                            className="btn btn-light"
                          >
                            Clear
                          </button>
                        </div>
                        <div>
                          <img src={props.url} alt="Screenshot" />
                        </div>
                      </>
                    )} */}
                  </div>
                  <div className="col-xl-6">
                    <div
                      style={{ marginRight: "10%" }}
                      className="card-body p-md-2 text-black "
                    >
                      <h3
                        className="mb-3 text-uppercase"
                        style={{ marginLeft: "25%", paddingTop: "5%" }}
                      >
                        Check In Form
                      </h3>
                      <form
                        onSubmit={handleSubmit}
                        style={{ paddingBottom: "5%" }}
                      >
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <div className="form-outline">
                              <label className="form-label">First name</label>
                              <input
                                onChange={inputChange}
                                name="firstName"
                                value={users.firstName}
                                minLength="2"
                                type="text"
                                className="form-control form-control-lg"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <div className="form-outline">
                              <label className="form-label">Last name</label>
                              <input
                                onChange={inputChange}
                                name="lastName"
                                type="text"
                                minLength="2"
                                value={users.lastName}
                                className="form-control form-control-lg"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <div className="form-outline">
                              <label className="form-label">
                                Mother's name
                              </label>
                              <input
                                onChange={inputChange}
                                name="mothersName"
                                minLength="2"
                                value={users.mothersName}
                                type="text"
                                className="form-control form-control-lg"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <div className="form-outline">
                              <label className="form-label">
                                Father's name
                              </label>
                              <input
                                onChange={inputChange}
                                name="fathersName"
                                minLength="2"
                                value={users.fathersName}
                                type="text"
                                className="form-control form-control-lg"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label">Address </label>
                          <input
                            onChange={inputChange}
                            name="address"
                            minLength="2"
                            value={users.address}
                            type="text"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              onChange={inputChange}
                              className="form-check-input"
                              name="gender"
                              type="radio"
                              checked={users.gender === "male"}
                              value="male"
                              required
                            />
                            <label className="form-check-label">Male</label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              onChange={inputChange}
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              checked={users.gender === "female"}
                              value="female"
                              required
                            />
                            <label className="form-check-label">Female</label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input
                              onChange={inputChange}
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              checked={users.gender === "other"}
                              value="other"
                              required
                            />
                            <label className="form-check-label">Other</label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <select
                              className="form-control form-control-lg"
                              onChange={inputChange}
                              name="state"
                              value={users.state}
                              required
                            >
                              <option value="">state</option>
                              <option value="2">Option 1</option>
                              <option value="3">Option 2</option>
                              <option value="4">Option 3</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <select
                              className="form-control form-control-lg"
                              onChange={inputChange}
                              name="city"
                              value={users.city}
                              required
                            >
                              <option value="">city</option>
                              <option value="Option 1">Option 1</option>
                              <option value="Option 2">Option 2</option>
                              <option value="Option 3">Option 3</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-labe">DOB</label>
                          <input
                            onChange={inputChange}
                            name="DOB"
                            max={dates}
                            //  value={users.dob}
                            type="date"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label">Pincode </label>
                          <input
                            onChange={inputChange}
                            type="number"
                            className="form-control form-control-lg"
                            name="pincode"
                            value={users.pincode}
                            required
                          />
                        </div>

                        {/* <div className="form-outline mb-3">
                          <label className="form-label">Course </label>
                          <input
                            onChange={inputChange}
                            name="course"
                            type="text"
                            minLength="2"
                            value={users.course}
                            className="form-control form-control-lg"
                            required
                          />
                        </div> */}

                        <div className="form-outline mb-3">
                          <label className="form-label">Email ID </label>
                          <input
                            onChange={inputChange}
                            name="email"
                            type="email"
                            value={users.email}
                            className="form-control form-control-lg"
                            required
                          />
                        </div>
                        <div className="d-flex justify-content-end pt-3">
                          <button
                            onClick={() => navigate("/checkintable")}
                            className="hiddenButton"
                          >
                            List Button
                          </button>
                          <button
                            onClick={resetButton}
                            className="btn btn-light btn-lg"
                          >
                            Reset All
                          </button>

                          <button
                            type="submit"
                            className="btn btn-outline-dark btn-lg ms-3"
                          >
                            Submit form
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
