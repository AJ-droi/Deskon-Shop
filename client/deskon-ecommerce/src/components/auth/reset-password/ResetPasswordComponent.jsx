import "../login/Login.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
// import axios from 'axios'

const ResetPasswordComponent = () => {
  // const styles = { backgroundImage: "url(../Images/family.psd)" };

  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const [searchParams] = useSearchParams();

const token = searchParams.get('token')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:4100/auth/reset-password?token=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ new_password: newPassword }),
      });
      // const response = await axios.post(`http://localhost:4100/auth/login`, {
      //   new_password,
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
        <h1>Reset Password</h1>
        {/* <p style={{backgroundColor:"red", padding:"5%"}}>{ name=== "prechi" ? 'yay prechi' : ' not prechi'}</p> */}

        <form onSubmit={handleSubmit}>
          <div className="ire">
            <div className="enter">
              <input
                type="password"
                name="new_password"
                id="new_password"
                placeholder=""
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              ></input>
              <span>Invalid email address</span>
              <label>New Password</label>
            </div>

          </div>

       

          <button type="submit">{loading? 'Submitting' :'Submit'}</button>

        </form>
      </div>
    </div>
  );
};

export default ResetPasswordComponent;
