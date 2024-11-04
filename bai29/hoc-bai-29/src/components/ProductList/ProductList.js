import React from "react";
import { productList } from "../data/products";
import ProductItem from "./ProductItem";
const ProductList = () => {
  return (
    <>
      <div className="product__list">
        {productList.map((item) => (
          <ProductItem key={item.id} item={item}/>
        ))}
      </div>
    </>
  );
};

export default ProductList;
