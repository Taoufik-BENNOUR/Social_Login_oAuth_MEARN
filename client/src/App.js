import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import PostDetail from "./components/Home/PostDetail";
import Login from "./components/Login/Login";

function App() {
  const [user, setuser] = useState(null)
useEffect(() => {
const getUser= ()=>{
  fetch('http://localhost:8000/auth/login/success',{
    method:"GET",
    credentials:"include",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
      "Access-Control-Allow-Credentials":true
    }
  }).then(response=>{
    if(response.status===200) return response.json()
    throw new Error("Failed to authenticate")
  }).then(resObject=>{
    setuser(resObject.user)
  }).catch(err=>console.log(err))
}
getUser()
}, [])
console.log(user)
  return (
    <>
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user? <Navigate to='/'/>: <Login />}/>
        <Route path="/post/:id" element={user?<PostDetail /> : <Navigate to="/login"/>} />
        
      </Routes>
    </>
  );
}

export default App;
