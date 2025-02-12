export const Section = () => {
  return (
    <article className="gadget-container">
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
    </article>
  );
};