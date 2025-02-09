// import { useState } from "react";
import "./Register.css"


const RegisterComponent = () => {
  const styles = { backgroundImage: "url(../Images/family.psd)" };
  return (
    <div style={styles}>
      <div className="login">
        <h1>Create your account</h1>

        <form action="">
          <div className="ire">
            <div className="enter">
              <input
                type="text"
                name="first_name"
                id="email"
                placeholder="First Name"
              ></input>
              {/* <span>Invalid email address</span> */}
              <label>First Name</label>
            </div>

            <div className="enter">
              <input
                type="text"
                name="last_name"
                id="email"
                placeholder="Last Name"
              ></input>
              {/* <span>Invalid email address</span> */}
              <label>Last Name</label>
            </div>

            <div className="enter">
              <input
                type="email"
                name="checkbox"
                id="email"
                placeholder=""
              ></input>
              {/* <span>Invalid email address</span> */}
              <label>Email</label>
            </div>

            <div className="enter">
              <input
                type="password"
                name="checkbox"
                id="password"
                placeholder=""
                pattern="[a-z0-9]{8,}"
              ></input>
              {/* <span>Digits or letters, minimum of 8 characters</span> */}
              <label>Password</label>
            </div>
          </div>

          <div className="click">
            <div className="check">
              <input type="checkbox" name="checkbox" id="checkbox"></input>
              <p>Remember password</p>
            </div>

            <p>Forgotten password?</p>
          </div>

          <a href="#">
            <button type="button">Login</button>
          </a>

          <p>OR</p>

          <a href="#">
            <button type="button">Sign up with Google</button>
          </a>

          <a href="#">
            <button type="button">Sign up with Email Address</button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
