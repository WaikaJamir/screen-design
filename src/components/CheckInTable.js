import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modals from "./Modals";
import users from "./Users";

function CheckInTable() {
  const [userss, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [singleUser, setSingleUser] = useState({});

  const currentTime = new Date().toLocaleTimeString("en-in", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  // const time = new Date()
  //  const currentTime = time.getHours() + ":" + time.getMinutes();
  // console.log(currentTime);

  const navigate = useNavigate();

  useEffect(() => {
    setUsers(users);
  }, []);

  const onCheckOut = (user) => {
    // console.log(user, "Parameter");
    let clicked = [];
    userss.forEach((data) => {
      // console.log(data, "data");
      if (data.name === user.name) {
        clicked.push({ ...data, isButtonCliked: true, checkOut: currentTime });
        setShowModal(false);
      } else {
        clicked.push({ ...data });
      }
    });
    console.log(clicked, "empty array");
    setUsers(clicked);
  };
  return (
    <div>
      <section className="backgroundColor">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div style={{ height: "53.7rem" }}>
                <div className="card h-100">
                  <div style={{ padding: "4rem", margin: "-2rem" }}>
                    <table id="tableCSS">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Check-In</th>
                          <th>Check-Out</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userss.map((user, i) => {
                          return (
                            <tr key={i}>
                              <td>{user.id}</td>
                              <td>{user.name}</td>
                              <td>{user.checkIn}</td>
                              <td>
                                {!user.isButtonCliked ? (
                                  <button
                                    style={{
                                      borderWidth: 1,
                                      borderColor: "black",
                                    }}
                                    className="btn btn-light btn-sm"
                                    onClick={() => {
                                      setSingleUser(user);
                                      setShowModal(true);
                                    }}
                                  >
                                    Check Out
                                  </button>
                                ) : (
                                  user.checkOut
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <button
            style={{
              borderWidth: 1,
              borderColor: "white",
              color: "white",
            }}
            className="btn btn-outline btn-md float-end"
            onClick={() => navigate("/")}
          >
            Go back
          </button>
        </div>
      </section>

      {showModal && (
        <Modals
          users={singleUser.name}
          show={showModal}
          checkout={() => onCheckOut(singleUser)}
          handleClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default CheckInTable;
