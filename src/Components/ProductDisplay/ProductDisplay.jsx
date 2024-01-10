import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/Assets/star_icon.png";
import star_dull from "../Assets/Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  // Explicitly define 'product' and destructure it from 'props'
  const { product } = props;

  console.log("ProductDisplay - Product:", product);

  // Log a message when the component renders
  console.log("ProductDisplay is rendering");

  if (!product) {
    return <div>{console.log(" No product data available")}</div>;
  }

  return (
    <div className="ProductDisplay">
      <div className="product-left">
        <div className="product-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-disp-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores
          sed voluptates eligendi, tenetur libero ad a odio aliquam eos.{" "}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-options">
            <div className="">Small</div>
            <div className="">Medium</div>
            <div className="">XL</div>
            <div className="">XXL</div>
          </div>
          <br />
          <button>Add to Cart</button>
          <br />
          <p className="product-display-right-category">
            <span>Category :</span>Women , T-Shirt , Crop-Top
          </p>
          <p className="product-display-right-category">
            <span>Tags :</span>Modrn , Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
