import logo from './logo.svg';
import './App.css';
import Login from './layout/Login';
import SignUp from './layout/SignUp';
import Board from './layout/Board';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/showMe")
        .then((res) => {
          return res.json();
        })
        .then(function (result) {
            setData(result);
      })
  },[]);

  useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/showMe' data={data} element={<Board/>}/> 
      </Routes>
       {/* 백엔드 데이터 :{data} */}
    </div>
  );
}

export default App;
