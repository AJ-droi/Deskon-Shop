import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import React from "react";
// import axios from 'axios'

const LoginComponent = () => {
  const styles = {
    // backgroundImage: "url(/Images/222222222222222222222.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh"
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

         if (email || password === "") navigate("/auth/Login");
    try {
      const response = await fetch("http://localhost:4100/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email, password }),
      });
      // const response = await axios.post(`http://localhost:4100/auth/login`, {
      //   email,
      //   password,
      // });

      const result = await response.json();

      localStorage.setItem('role', result.user.role)

      navigate('/');

 
    

      alert(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles}>
      <div className="login">
        <h1>Login your account</h1>
        {/* <p style={{backgroundColor:"red", padding:"5%"}}>{ name=== "prechi" ? 'yay prechi' : ' not prechi'}</p> */}

        <form onSubmit={handleSubmit}>
          <div className="ire">
            <div className="enter">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <span>Invalid email address</span>
              <label>Email</label>
            </div>

            <div className="enter">
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                // pattern="[a-z0-9]{8,}"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <span>Digits or letters, minimum of 8 characters</span>
              <label>Password</label>
            </div>
          </div>

          <div className="click">
            <div className="check">
              <input type="checkbox" name="checkbox" id="checkbox"></input>
              <p>Remember password</p>
            </div>
            <Link to="/auth/forgot-password" className="link">
              <p>Forgotten password?</p>
            </Link>
          </div>

          <button type="submit">Login</button>

          <p>OR</p>

          <a href="#">
            <button type="button">Sign up with Google</button>
          </a>

          <Link to="/auth/register">
            <button type="button">Sign up with Email Address</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
