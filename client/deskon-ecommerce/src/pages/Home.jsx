// import ImageUploading from "react-images-uploading";
import "./Home.css";
import React, { useState } from "react";
// import Login from "./auth/Login";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      <Section2 />
    </div>
  );
};

//Applying Navbars
const Header = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  return (
    // First navbar
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="./logo192.png" alt="smiling guy" />
        </div>
        <div className="nav-search">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Search your favourite"
          />
          <button type="submit">
            <img src="./Icons/search-line.svg" alt=" search" /> Search
          </button>
        </div>
        <div className="nav-icons">
          <img src="./Icons/heart-fill.svg" alt="Favourite" />
          <img src="./Icons/user.svg" alt="User" />
          <img src="./Icons/cart.svg" alt="Cart" />
        </div>
      </div>

      {/* Second navbar */}
      <div className="nav-container2">
        <ul className="catego">
          <div className="category">
            <li>Categories</li>
            <img
              onClick={toggleDropDown}
              src="./Icons/arrow-down.svg"
              alt="Drop-down"
            />
          </div>

          {openDropDown && (
            <div className="list-items">
              <li>Fashion</li>
              <li>Electronics</li>
              <li>Beverages</li>
              <li>Food</li>
              <li>Toys</li>
              <li>Health</li>
            </div>
          )}
        </ul>

        <ul className="nav-items">
          <li>Home</li>
          <li>Brand</li>
          <li>Shopping</li>
          <li>New Arrivals</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>
            <a href="http:/auth/Login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// First homepage section
const Main = () => {
  // const style ={color: 'red', fontSize: '48px', textTransform: 'upperCase'}
  return (
    <div className="main">
      <div className="main-text">
        <h1>Shop your favourite</h1>
        <h1>Get <span style={{color: 'red'}}>30%</span> off New Arrivals.</h1>
        <button>Shop Now</button>
      </div>
      <div className="main-image">
        <img src="../Images/girl-dance.png" alt="" />
      </div>
    </div>
  );
};

// For gadgets section
const Section =() => {
  return (
    <div className="gadget-container">
      <div className="arrow">
        <img src="./Icons/arrow-left-circle-line.svg" alt="" />
      </div>
      <div className="gadget-children">
        <div className="gadget">
          <div className="buy-gadget">
            <img src="./Icons/heart-fill.svg" alt="" />
            <p>Buy now</p>
          </div>
          <div className="gadget-item">
            <img src="./Images/Drone1.png" alt="" />
          </div>
          <div className="gadget-price">
            <h4>Drone</h4>
            <button>$250</button>
          </div>
        </div>
        <div className="gadget">
          <div className="buy-gadget">
            <img src="./Icons/heart-fill.svg" alt="" />
            <p>Buy now</p>
          </div>
          <div className="gadget-item">
            <img src="./Images/phone.png" alt="" />
          </div>
          <div className="gadget-price">
            <h4>Phone</h4>
            <button>$100</button>
          </div>
        </div>
        <div className="gadget">
          <div className="buy-gadget">
            <img src="./Icons/heart-fill.svg" alt="" />
            <p>Buy now</p>
          </div>
          <div className="gadget-item">
            <img src="./Images/Olike1.png" alt="" />
          </div>
          <div className="gadget-price">
            <h4>Headset</h4>
            <button>$2.00</button>
          </div>
        </div>
      </div>
      {/* <div className="gadget">
        <div className="buy-gadget">
          <img src="./Icons/heart-line.png" alt="" />
          <p>Buy now</p>
        </div>
        <div className="gadget-item">
          <img src="./Images/Drone1.png" alt="" />
        </div>
        <div className="gadget-price">
          <p>Drone</p>
          <button>$250</button>
        </div>
      </div>
      <div className="gadget">
        <div className="buy-gadget">
          <img src="./Icons/heart-line.png" alt="" />
          <p>Buy now</p>
        </div>
        <div className="gadget-item">
          <img src="./Images/smartwatch.png" alt="" />
        </div>
        <div className="gadget-price">
          <p>Smart watch</p>
          <button>$50</button>
        </div>
        <div className="gadget">
          <div className="buy-gadget">
            <img src="./Icons/heart-line.png" alt="" />
            <p>Buy now</p>
          </div>
          <div className="gadget-item">
            <img src="./Images/TV1.png" alt="" />
          </div>
          <div className="gadget-price">
            <p>TV</p>
            <button>$150</button>
          </div>
        </div>
      </div> */}
      <div className="arrow">
        <img src="./Icons/arrow-right-circle-line.svg" alt="" />
      </div>
    </div>
  );
}

// Category section
const Section2 = () => {
  const styles = {fontFamily: "Poppins", fontWeight: "500", fontStyle: "normal", fontSize: "2rem", paddingBottom: "", backgroundColor: "grey", color: "white"}
  return (
    <div className="category-sec">
      <h2 
        style={styles}>Categories
      </h2>
      <div className="item-categories">
        <div className="item-category">
          <img src="./Images/man.png" alt="" />
          <h4>Men fashion</h4>
        </div>
        <div className="item-category">
          <img src="./Images/woman.png" alt="" />
          <h4>Women fashion</h4>
        </div>
        <div className="item-category">
          <img src="./Images/electronics.png" alt="" />
          <h4>Electronics</h4>
        </div>
        <div className="item-category">
          <img src="./Images/bag-of-rice.jpg" alt="" />
          <h4>Foodstuff</h4>
        </div>
        <div className="item-category">
          <img src="./Images/cubic.png" alt="" />
          <h4>Puzzle</h4>
        </div>
        <div className="item-category">
          <img src="./Images/chair1.png" alt="" />
          <h4>Funiture</h4>
        </div>
        <div className="item-category">
          <img src="./Images/drinks2.png" alt="" />
          <h4>Beverages</h4>
        </div>
        <div className="item-category">
          <img src="./Images/health4.png" alt="" />
          <h4>Health</h4>
        </div>
      </div>
      <button>See more</button>
    </div>
  );
}

export default Home;