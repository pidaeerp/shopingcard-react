import React, { useEffect, useState } from "react";
import pedirProductos from "./pedirProductos";
import ItemList from "./ItemList";
// import data from "../../data/productos.json";

const ItemListContainer = () => {
  //console.log(data);
  //let productos = [];
  const [productos, setProductos] = useState([]);
  //console.log(productos);

  //   const pedirProductos = () => {
  //     return new Promise((resolve, reject) => {
  //       resolve(data);
  //     });
  //   };

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
      //console.log(productos);
    });
    return () => {};
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
      {/* <h1>Productos</h1>
      {productos.length > 0 &&
        productos.map((product) => {
          return (
            <div>
              <img src={product.image} alt={product.tittle} />
              <h2>{product.tittle}</h2>
              <h2>${product.price}</h2>
              <h2>{product.description}</h2>
            </div>
          );
        })} */}
    </div>
  );
};

export default ItemListContainer;
