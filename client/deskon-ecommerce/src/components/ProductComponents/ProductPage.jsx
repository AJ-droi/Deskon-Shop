import { Link } from "react-router-dom";
import "../ProductComponents/Product.css";
import { useEffect, useState } from "react";
import useCartStore from "../../stores/cart.store";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  return (
    <article>
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
          <img src="./Icons/cart.svg" alt="Cart" />
        </div>
      </div>
      <h1>Product page</h1>
      <ProductSection data={products} />
    </article>
  );
};

export const ProductSection = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data } = props;

  const myStyles = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: "5%",
    padding: "7%",
  };

  const { addToCart, getCart } = useCartStore();

  console.log({ cartInfo: getCart() });

  return (
    <div className="gadget-children" style={myStyles}>
      {data ? (
        // eslint-disable-next-line react/prop-types
        data?.map((item, index) => (
          <div className="gadget" key={index}>
            <div className="buy-gadget">
              <img src="./Icons/heart-fill.svg" alt="" />
              <span onClick={() => addToCart(item)}>
                Add to cart <img src="./Icons/cart.svg" alt="" />
              </span>
            </div>
            <div className="gadget-item">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="gadget-price">
              <h4>{item.name}</h4>
              <button>${item.price}</button>
            </div>
          </div>
        ))
      ) : (
        <p> No Products Available</p>
      )}

      <div className="gadget">
        <div className="buy-gadget">
          <img src="./Icons/heart-fill.svg" alt="" />
          <p>Buy now</p>
        </div>
        <div className="gadget-item">
          <img src="./Images/laptop-stand.jpg" alt="" />
        </div>
        <div className="gadget-price">
          <h4>Phone</h4>
          <button>$20.40</button>
        </div>
      </div>
    </div>
  );
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
<Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;