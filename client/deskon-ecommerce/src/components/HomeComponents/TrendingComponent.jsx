import "../StylesComponents/Trending.css";

export const Trending = () => {
  const styles = {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "2rem",
    paddingBottom: "",
    backgroundColor: "grey",
    color: "white",
    textAlign: "center",
  };
  return (
    <article className="trending">
      <h2 style={styles}>Top Trending</h2>
      <article className="trending-container">
        <div className="trending-child">
          <img src="./Images/laptop-stand.jpg" alt="" />
          <div className="cart">
            <span style={{ width: "100%" }}>
              <p>Laptop stand</p>
              <h3>$3.00</h3>
            </span>
            <span
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src="./Icons/heart-fill.svg"
                alt=""
                style={{ width: "40%" }}
              />
              <img src="./Icons/cart.svg" alt="" style={{ width: "40%" }} />
            </span>
          </div>
        </div>

        <div className="trending-child">
          <img src="./Images/power-bank.jpg" alt="" />
          <div className="cart">
            <span style={{ width: "100%" }}>
              <p>20000mAh power bank</p>
              <h3>$12.00</h3>
            </span>
            <span
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src="./Icons/heart-fill.svg"
                alt=""
                style={{ width: "40%" }}
              />
              <img src="./Icons/cart.svg" alt="" style={{ width: "40%" }} />
            </span>
          </div>
        </div>

        <div className="trending-child">
          <img src="./Images/roll-on.png" alt="" />
          <div className="cart">
            <span style={{ width: "100%" }}>
              <p>Men roll-on</p>
              <h3>$5.00</h3>
            </span>
            <span
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src="./Icons/heart-fill.svg"
                alt=""
                style={{ width: "40%" }}
              />
              <img src="./Icons/cart.svg" alt="" style={{ width: "40%" }} />
            </span>
          </div>
        </div>

        <div className="trending-child">
          <img src="./Images/mini-fan.jpg" alt="" />
          <div className="cart">
            <span style={{ width: "100%" }}>
              <p>Portable mini fan</p>
              <h3>$2.00</h3>
            </span>
            <span
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src="./Icons/heart-fill.svg"
                alt=""
                style={{ width: "40%" }}
              />
              <img src="./Icons/cart.svg" alt="" style={{ width: "40%" }} />
            </span>
          </div>
        </div>

        <div className="trending-child">
          <img src="./Images/ear-bud2.jpg" alt="" />
          <div className="cart">
            <span style={{ width: "100%" }}>
              <p>Wireless earbud</p>
              <h3>$6.00</h3>
            </span>
            <span
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src="./Icons/heart-fill.svg"
                alt=""
                style={{ width: "40%" }}
              />
              <img src="./Icons/cart.svg" alt="" style={{ width: "40%" }} />
            </span>
          </div>
        </div>

        <div className="trending-child">
          <img src="./Images/pallette.png" alt="" />
          <div className="cart">
            <span style={{ width: "100%" }}>
              <p>Lipstick pallette</p>
              <h3>$8.00</h3>
            </span>
            <span
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src="./Icons/heart-fill.svg"
                alt=""
                style={{ width: "40%" }}
              />
              <img src="./Icons/cart.svg" alt="" style={{ width: "40%" }} />
            </span>
          </div>
        </div>

        <div className="trending-child">
          <img src="./Images/humidifier.jpg" alt="" />
          <div className="cart">
            <span style={{ width: "100%" }}>
              <p>Humidifier</p>
              <h3>$10.00</h3>
            </span>
            <span
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src="./Icons/heart-fill.svg"
                alt=""
                style={{ width: "40%" }}
              />
              <img src="./Icons/cart.svg" alt="" style={{ width: "40%" }} />
            </span>
          </div>
        </div>

        <div className="trending-child">
          <img src="./Images/jewery.jpg" alt="" />
          <div className="cart">
            <span style={{ width: "100%" }}>
              <p>Luxury jewery</p>
              <h3>$15.00</h3>
            </span>
            <span
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src="./Icons/heart-fill.svg"
                alt=""
                style={{ width: "40%" }}
              />
              <img src="./Icons/cart.svg" alt="" style={{ width: "40%" }} />
            </span>
          </div>
        </div>
      </article>
    </article>
  );
};
