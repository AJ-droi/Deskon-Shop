export const Main = () => {
  // const style ={color: 'red', fontSize: '48px', textTransform: 'upperCase'}
  return (
    <article className="main">
      <div className="main-text">
        <h1>Shop your favourite</h1>
        <h1>
          Get <span style={{ color: "red" }}>30%</span> off New Arrivals.
        </h1>
        <button>Shop Now</button>
      </div>
      <div className="main-image">
        <img src="../Images/girl-dance.png" alt="" />
      </div>
    </article>
  );
};