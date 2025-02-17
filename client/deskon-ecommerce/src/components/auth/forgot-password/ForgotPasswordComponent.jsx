import "../login/Login.css";
import { useState } from "react";
// import axios from 'axios'

const ForgotPasswordComponent = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await fetch("http://localhost:4100/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email, }),
      });
      // const response = await axios.post(`http://localhost:4100/auth/login`, {
      //   email,
      //   password,
      // });

      const result = await response.json();
      console.log(result);

      alert(result.message);
      setLoading(false)
    } catch (error) {
      console.log(error);
        setLoading(false);
      alert(error.message)
    }
  };

  return (
    <div style={""}>
      <div className="login">
        <h1>Forgot Password</h1>
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

          </div>

       

          <button type="submit">{loading? 'Submitting' :'Submit'}</button>

        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
