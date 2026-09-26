import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect, useState } from "react";
import { setLocalStorage } from "./utils/LocalStorage";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "admin1@example.com" && password == "123") {
      setUser("admin");
    } else if (email == "" && password == "123") {
      setUser("employee");
    }else{
      alert("invalid credentials");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;
