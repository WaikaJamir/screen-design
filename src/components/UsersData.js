import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import users from "./Users";

function UsersData() {
    const location=useLocation()
    const [users, setUsers] = useState([])
  const currentTime = new Date().toLocaleTimeString("en-in", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  console.log(location,'iugyft');
  useEffect(() => {
    setUsers(location.state.users)
  
    
  }, [location.state.users])
  
  console.log(users);
  const params = useParams();
  //   const userId = params.user;

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get(`/home/waikalajamir/screen-design/src/components/${users}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         setDesignation(res.data.designation);
  //         setId(res.data.id);
  //         setName(res.data.name);
  //         setOrganization(res.data.organization);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <div>
      <div className="cards">
        <h2 style={{ textAlign: "center" }}>Welcome To XcubeLabs</h2>
        <img src={users.url} style={{height:'150px',width:'150px', borderRadius:'30px'}} alt="Screenshot" />
        <p>Id: {users.id}</p>
        <p>Name: {users.firstName}</p>
        <p>Designation: {users.designation}</p>
        <p>Organization: {users.organization}</p>
        <span>
          Check-in: {users.checkIn}
          {currentTime}
        </span>
      </div>
    </div>
  );
}

export default UsersData;
