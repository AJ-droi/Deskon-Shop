/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const Section = () => {
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

  return (
    <article className="gadget-container">
      <div className="arrow">
        <img src="./Icons/arrow-left-circle-line.svg" alt="" />
      </div>
      <ProductSection data={products}/>
      
        {/* <div className="gadget">
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
        </div> */}
      
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
    </article>
  );
};

export const ProductSection = (props) => { 
  
  const { data } = props;
  return (
    <div className="gadget-children">
      {data ? (
        data?.map((item, index) => (
          <div className="gadget" key={index}>
            <div className="buy-gadget">
              <img src="./Icons/heart-fill.svg" alt="" />
              <p>Buy now</p>
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
    </div>
  );
};
