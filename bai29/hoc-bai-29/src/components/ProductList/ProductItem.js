import React from "react";

const ProductItem = (props) => {
  const { item } = props;
  return (
    <>
      <div className="product__item">
        <img className="product__image" src={item.thumbnail} alt={item.title} />
        <div className="product__name">{item.title}</div>
        <div className="product__price">Giá: {item.price}$</div>
      </div>
    </>
  );
};

export default ProductItem;
