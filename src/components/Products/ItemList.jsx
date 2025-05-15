import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      <h1>Productos</h1>
      {productos.length > 0 &&
        productos.map((product) => {
          return (
            <Item key={product.id} product={product} />
            // <div>
            //   <img src={product.image} alt={product.tittle} />
            //   <h2>{product.tittle}</h2>
            //   <h2>${product.price}</h2>
            //   <h2>{product.description}</h2>
            // </div>
          );
        })}
    </div>
  );
};

export default ItemList;
