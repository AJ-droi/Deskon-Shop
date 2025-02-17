// import logo from './logo.svg';
// import "./App.css";
// import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import OtpInput from "./pages/auth/Otp.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import Product from "./pages/product/Product.jsx";
import AddProduct from "./pages/product/AddProduct.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="auth">
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="otp" element={<OtpInput />}></Route>
            <Route path="forgot-password" element={<ForgotPassword />}></Route>
            <Route path="reset-password" element={<ResetPassword />}></Route>
          </Route>
          <Route path="products" element={<Product />}></Route>
          <Route path="add-products" element={<AddProduct />}></Route>
        </Routes>
      </Router>

      {/* const [file, setFile] = useState();
        function handleChange(e) {
          console.log(e.target.files);
          setFile(URL.createObjectURL(e.target.files[0]));
        }
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img src={file} alt="guy" />
       */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload Now.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
