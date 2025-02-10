import "../login/Login.css";
import { useState } from "react";
import OtpInput from "react-otp-input";
// import axios from 'axios'

const Otp = () => {
  const styles = { backgroundImage: "url(../Images/family.psd)" };
 const [otp, setOtp] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4100/auth/verify-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ otp }),
      });
      // const response = await axios.post(`http://localhost:4100/auth/login`, {
      //   email,
      //   password,
      // });

      const result = await response.json();
      console.log(result);

      alert(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles}>
      <form onSubmit={handleSubmit} style={{ padding: "5%" }}>
        <div className="ire">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              border:"1px solid black",
              borderRadius:"5px",
              fontSize:"20px",
              color:"#000"
            }}
            containerStyle={{
              display:"flex",
              justifyContent:"center",
              padding:"3%"
            }}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Otp;


