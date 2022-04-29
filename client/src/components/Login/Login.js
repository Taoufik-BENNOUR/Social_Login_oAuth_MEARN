import React from "react";

const Login = () => {

  const google = () =>{
    window.open("http://localhost:8000/auth/google")
  }
  return (
    <div className="login">
      <h1 className="loginTitle">Choose login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
          <i className="fa fa-google " aria-hidden="true"></i>
          Google
          </div>
          <div className="loginButton facebook">
          <i className="fa fa-facebook " aria-hidden="true"></i>
          Facebook
          </div>
          <div className="loginButton github">
          <i className="fa fa-github " aria-hidden="true"></i>
          Github
          </div>
          </div>
          <div className="center">
              <div className="line"> </div>
                <div className="or">OR</div>
          </div>
        <div className="right">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button className="sumbit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
