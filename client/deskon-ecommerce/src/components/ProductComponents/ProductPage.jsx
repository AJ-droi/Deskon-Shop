/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../ProductComponents/Product.css";
import { useEffect, useState } from "react";
import useCartStore from "../../stores/cart.store";
// import { AddToCart } from "../HomeComponents/HeaderComponent";

export const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:4100/product/all");

        const result = await response.json();

        setProducts(result.products);
      } catch (error) {
        alert(error.message);
      }
    };

    getProducts();
  }, []);

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
    setOpen(!open); // Ensure state updates
  };


  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="./logo192.png" alt="" />
        </Link>
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
          <Link to="/add-products" style={{ margin: "0 60% 0 0" }}>
            <p>Add product</p>
          </Link>
          <div className="root">
            <img
              src="./Icons/user.svg"
              alt="User"
              className="rootImage"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <span className="rootSpan">
              {isDropdownVisible && (
                <ul
                  className="rootList"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <li className="rootLi">Profile</li>
                  <hr />
                  <li className="rootLi">Logout</li>
                </ul>
              )}
            </span>
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

      <h1>Product page</h1>
      <ProductSection data={products} />
      {/* <AddToCart /> */}
    </nav>
  );
};

export const ProductSection = (props) => {
  const { data } = props;

  const myStyles = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: "5%",
    padding: "7%",
    position: "relative",
  };

  const { addToCart, getCart, changeQuantity, removeFromCart } = useCartStore();

  console.log({ cartInfo: getCart() });

  const cart = getCart().cart; // Fetch the latest cart state

  return (
    <div className="gadget-children" style={myStyles}>
      {data ? (
        data.map((item, index) => {
          const cartItem = cart.find((cartItem) => cartItem._id === item._id);
          const quantity = cartItem ? cartItem.quantity : 0; // Get quantity from cart state

          return (
            <div className="gadget" key={index}>
              <div className="buy-gadget">
                <img src="./Icons/heart-fill.svg" alt="" />
                <span onClick={() => addToCart(item)}>
                  Add to cart <img src="./Icons/cart.svg" alt="" />
                </span>

                <span onClick={() => removeFromCart(item)}>
                  Remove from cart <img src="./Icons/cart.svg" alt="" />
                </span>
              </div>
              <div className="gadget-item">
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div className="gadget-price">
                <h4>{item.name}</h4>
                <button>${item.price}</button>
              </div>
              <div className="gadget-price">
                <button
                  onClick={() => quantity > 0 && changeQuantity(item, -1)}
                  disabled={quantity === 0}
                >
                  -
                </button>
                <h4>{quantity}</h4>
                <button onClick={() => changeQuantity(item, 1)}>+</button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No Products Available</p>
      )}
    </div>
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
// }
