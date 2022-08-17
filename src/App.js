import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Webcame from "./components/WebCam";
import { Route, Routes } from "react-router-dom";
import CheckInTable from "./components/CheckInTable";
import UsersData from "./components/UsersData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Webcame />} />
        <Route path="/checkintable" element={<CheckInTable />} />
        <Route path="/usersdata" element={<UsersData />} />
      </Routes>
    </>
  );
}

export default App;
