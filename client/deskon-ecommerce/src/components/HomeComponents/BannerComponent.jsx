export const Banner = () => {
  return (
    <article className="container-banner">
      <div className="container-image">
        <img src="./Images/groceries-lady.png" alt="" />
      </div>
      <div className="container-text">
        <h1>
          Get your groceries from our React Store with
          <span style={{ color: "red" }}> 30% cheaper rate</span>
        </h1>
        <button>Buy now</button>
      </div>
    </article>
  );
};