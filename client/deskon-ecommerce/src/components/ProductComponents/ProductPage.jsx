import { Link } from "react-router-dom";
import { ProductSection } from "../../components/HomeComponents/SectionComponent"
// import { useEffect, useState } from "react";

const productData = [
  {
    name: "Irene",
    price: "100$",
    imageUrl:
      "https://i.ytimg.com/vi/DRRWS1PPPM4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD-4NuJjhmjI8NmjZmhC9H9hjQAmw",
  },
  {
    name: "Irene",
    price: "100$",
    imageUrl:
      "https://i.ytimg.com/vi/DRRWS1PPPM4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD-4NuJjhmjI8NmjZmhC9H9hjQAmw",
  },
];


export const ProductPage =() => {
  
  
  return (
    <article>
      <ProductSection data={productData} />
      <button>
        <Link to="/add-products">Add Product</Link>
      </button>

      {/* <ProductSection data={products} /> */}
    </article>
  );
};


// import { ProductPage } from "../components/ProductComponents/ProductPage";
// // import { ProductSection } from "./SectionComponent";



// export const Section = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:4100/product/all");

//         const result = await response.json();

//         setProducts(result.products);
//       } catch (error) {
//         alert(error.message);
//       }
//     };

//     getProducts();
//   }, []);

//   return (
//     <article>
//       <ProductSection data={products} />
//     </article>
//   );
// };



