import logo from "./logo.svg";
import "./App.css";
import Login from "./layout/Login";
import SignUp from "./layout/SignUp";
import Board from "./layout/Board";
import { useEffect, useState } from "react";

import axios from "axios";
import { Route, Routes } from "react-router-dom";
import WriteModal from "./component/WriteModal";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/showMe")
      .then((res) => {
        return res.json();
      })
      .then(function (result) {
        setData(result);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/board" element={<Board />} />
      </Routes>
      <ul>
        {data.map((v, idx) => (
          <li key={`${idx}-${v}`}>{v}</li>
        ))}
      </ul>
    
    </div>
  );
}

export default App;
