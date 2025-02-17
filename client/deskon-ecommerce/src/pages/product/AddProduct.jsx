import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddProduct = () => {
  const styles = { backgroundImage: "url(../Images/family.psd)" };

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("stock", stock);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("imageUrl", image); // Append the image file

    try {
      const response = await fetch(
        "http://localhost:4100/product/add-product",
        {
          method: "POST",
          body: formData, // Send FormData
        }
      );

      const result = await response.json();
      console.log({result});
      alert(result.message);
      navigate("/add-products");
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <div style={styles}>
      <div className="login">
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="ire">
            {/* Product Name */}
            <div className="enter">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Product Name</label>
            </div>

            {/* Stock */}
            <div className="enter">
              <input
                type="string"
                name="stock"
                placeholder="Stock Quantity"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
              />
              <label>Stock Quantity</label>
            </div>

            {/* Price */}
            <div className="enter">
              <input
                type="string"
                name="price"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <label>Product Price</label>
            </div>

            {/* Category Dropdown */}
            <div className="enter">
              {/* <input
                type="text"
                name="category"
                id="category"
                placeholder=""
                // pattern="[a-z0-9]{8,}"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              ></input> */}

              <select
                id="category"
                name="category"
                required
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="">-- Select a category --</option>
                <option value="67936449e877e63ac1d528c0">Nature</option>
                <option value="67936449e877e63ac1d528c0">Technology</option>
                <option value="67936449e877e63ac1d528c0">Art</option>
                <option value="67936449e877e63ac1d528c0">Sports</option>
              </select>

              <span>Digits or letters, minimum of 8 characters</span>
              {/* <label>Product Category</label> */}
            </div>

            {/* Image Upload */}
            <div className="enter">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
              <label>Product Image</label>
            </div>
          </div>

          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
