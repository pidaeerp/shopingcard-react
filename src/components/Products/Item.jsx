import React from "react";

const Item = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.tittle} />
      <h2>{product.tittle}</h2>
      <h2>${product.price}</h2>
      <h2>{product.description}</h2>
    </div>
  );
};

export default Item;
