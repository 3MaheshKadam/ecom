import React from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = React.useContext(ShopContext);
  const { productId } = useParams();

  // Log values for debugging
  console.log("all_product:", all_product);
  console.log("productId:", productId);

  const product = all_product.find((e) => e.id === Number(productId));

  // Log the selected product for debugging
  console.log("Selected Product:", product);

  // Check if product is undefined or null
  if (!product) {
    return <div>No product data available</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
