import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
//import Logout from "./components/Logout/Logout";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Home name={userName} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
