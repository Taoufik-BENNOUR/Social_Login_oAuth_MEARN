import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
  const logout = ()=>{
    window.open("http://localhost:8000/auth/logout")  }
  return (
    <div className="navbar">
     <span className="logo"> <Link className="link" to="/">oAuth</Link></span> 
     {user? (

    
      <ul className="list">
        <li className="listItem"></li>
        <img src={user.photos.map(el=>el.value)} alt="" className="avatar"/>
        <li className="listItem">{user.displayName}</li>
        <li className="listItem" onClick={logout}>Logout</li>
        
      </ul> ):(<Link className="link" to="/Login">Login</Link>)}
    </div>
  );
};

export default Navbar;
