import { useState } from "react";
import "./Register.css"
import { useNavigate} from "react-router-dom";


const RegisterComponent = () => {
  const styles = { backgroundImage: "url(../Images/family.psd)" };
  const navigate = useNavigate()

  //  const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [first_name, setFirstname] = useState("");
  //   const [last_name, setLastname] = useState("");

    const [formData, setFormData] = useState({
      first_name:"",
      last_name:"",
      email:"",
      password:""
    })

  const handleChange = (e) => {
    const {name, value} = e.target
console.log('before', formData)
    setFormData({...formData, [name]:value})
    console.log(formData)
  }

    const handleRegistration = async (e) => {
      e.preventDefault()
      try {
        const response = await fetch("http://localhost:4100/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
  
          body: JSON.stringify(formData),
        });
        // const response = await axios.post(`http://localhost:4100/auth/login`, {
        //   email,
        //   password,
        // });
  
        const result = await response.json();
  
        if(result){
          alert(`${result.message}`);
          navigate("/auth/otp");
        }
        
        
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
                onChange={handleChange}
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
                onChange={handleChange}
              ></input>
              {/* <span>Invalid email address</span> */}
              <label>Last Name</label>
            </div>

            <div className="enter">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                onChange={handleChange}
              ></input>
              {/* <span>Invalid email address</span> */}
              <label>Email</label>
            </div>

            <div className="enter">
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                pattern="[a-z0-9]{8,}"
                onChange={handleChange}
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

          <button type="submit">Register</button>

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
