import "../StylesComponents/Header.css";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    console.log("Toggling Sidebar"); // Debugging
    setOpen((prev) => !prev); // Ensure state updates
  };

  const root = {
    width: "7%",
    inset: "5% 0 0 86%",
    textAlign: "center",
    position: "absolute",
  };
  const rootImage = { width: "33%", position: "relative", inset: "0 0 0 -45%" };
  const rootSpan = {
    zIndex: "99",
    position: "absolute",
    inset: "4.7% 0 0 -35%",
  };
  const rootList = {
    listStyle: "none",
    display: "",
    width: " 65%",
    textAlign: "start",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    cursor: "pointer",
  };
  const rootLi = { padding: "4% 0 4% 10%" };
  return (
    // First navbar
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="./logo192.png" alt="" />
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
          <div style={root}>
            <img
              src="./Icons/user.svg"
              alt="User"
              style={rootImage}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {isDropdownVisible && (
              <span style={rootSpan}>
                <ul
                  style={rootList}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <li style={rootLi}>Profile</li>
                  <hr />
                  <li style={rootLi}>Logout</li>
                </ul>
              </span>
            )}
          </div>
          <img src="./Icons/heart-fill.svg" alt="Favourite" />
          <img src="./Icons/cart.svg" alt="Cart" onClick={toggleSidebar} />
        </div>
      </div>

      {open && (
        <div className="cart">
          <div className="mycart">
            <h2>My Cart</h2>
          </div>
          <ul className="productList"></ul>

          <p>Total: #0</p>
          <div className="checkout">
            <div className="total">
              <span>Checkout</span>
            </div>
            <div className="close" onClick={toggleSidebar}>
              Close
            </div>
          </div>
        </div>
      )}

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
          <li>{/* <Link to="/products/Cart.page.jsx">Brand</Link> */} Brand</li>
          <li>
            <Link to="/products">Products</Link>
          </li>
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

// export const AddToCart = () => {
//   return (
//     <div className="cart">
//       <div className="mycart">
//         <h2>My Cart</h2>
//       </div>
//       <ul className="productList"></ul>

//       <div className="checkout">
//         <div className="total">
//           <span>Total</span>#0
//         </div>
//         <div className="close">Close</div>
//       </div>
//     </div>
//   );
// };
