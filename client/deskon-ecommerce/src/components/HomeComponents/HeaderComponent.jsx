// import "Home.css";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";

export const Header = () => {
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
