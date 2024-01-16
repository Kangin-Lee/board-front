
import "./App.css";
import Login from "./layout/Login";
import SignUp from "./layout/SignUp";
import Board from "./layout/Board";
import { useEffect, useState } from "react";

// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import PrivateDetailRoute from "./route/PrivateDetailRoute";
import PrivateWriteRoute from "./route/PrivateWriteRoute";

function App() {
  const [data, setData] = useState([]);
  // const [posts, setPosts] = useState([]);
  const [authenticate, setAuthenticate] = useState(false);
  
  useEffect(()=>{
    console.log("aaa", authenticate);
  },[authenticate]);


  useEffect(() => {
    fetch("/")
      .then((res) => {
        return res.json();
      })
      .then(function (result) {
        
        setData(result);
        console.log(data);
      });
  }, []);

  // useEffect( async ()=>{
  //   try{
  //     const response = await axios.get("/helloworld")
  //     setPosts(response.data);
  //   }catch(error){
  //     console.log(error);
  //   }
  //   axios.get("/helloworld")
  // },[])


  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" data={data} element={<Root/>}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Board authenticate={authenticate}/>} />
        <Route path="/board/:id" element={<PrivateDetailRoute authenticate={authenticate}/>}/>
      </Routes>
      {/* <ul>
        {data.map((v, idx) => (
          <li key={`${idx}-${v}`}>{v}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
