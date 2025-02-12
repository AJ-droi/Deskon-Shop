import { ProductSection } from "./SectionComponent";

export const Section2 = () => {
  const styles = {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "2rem",
    paddingBottom: "",
    backgroundColor: "grey",
    color: "white",
  };
  const seeMore = {
    fontFamily: "Poppins",
    fontWeight: "500",
    backgroundColor: "rgb(148, 146, 146)",
    color: "white",
    borderRadius: "50%",
    width: "70%",
    height: "85%",
    marginTop: "3%",
  };
  return (
    <article className="category-sec">

      <h2 style={styles}>Categories</h2>
      <ProductSection data={[{
        name:"jane",
        price:"100",
}]}/>
      <article className="item-categories">
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
          <img src="./Images/bag-of-rice1.png" alt="" />
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
        <div className="item-category" style={seeMore}>
          <h4 style={{ margin: "40% 0", fontSize: "1.2rem" }}>See More</h4>
        </div>
      </article>
    </article>
  );
};