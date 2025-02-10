import { useState } from "react";
import "./Register.css"


const RegisterComponent = () => {
  const styles = { backgroundImage: "url(../Images/family.psd)" };

   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");

  
    const handleRegistration = async (e) => {
      e.preventDefault()
      try {
        const response = await fetch("http://localhost:4100/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
  
          body: JSON.stringify({ email, password, first_name,last_name }),
        });
        // const response = await axios.post(`http://localhost:4100/auth/login`, {
        //   email,
        //   password,
        // });
  
        const result = await response.json();
        console.log(result);
  
      
  
        // alert(`${result}`);
      } catch (error) {
        console.log(error);
      }
    };
  
  return (
    <div style={styles}>
      <div className="login">
        <h1>Create your account</h1>

        <form onSubmit={handleRegistration}>
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
