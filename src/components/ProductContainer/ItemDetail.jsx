import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  // const { user, edad } = useContext(CartContext);
  // console.log(user);
  // console.log(edad);

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  // const handleAgregar = () => {
  //   const itemAgregado = { ...item, cantidad };
  //   //console.log(itemAgregado);
  //   const nuevoCarrito = [...carrito];
  //   const estaEnCarrito = nuevoCarrito.find(
  //     (prod) => prod.id === itemAgregado.id
  //   );

  //   if (estaEnCarrito) {
  //     //console.log("Está en el carrito");
  //     estaEnCarrito.cantidad += cantidad;
  //   } else {
  //     //console.log("No está");
  //     nuevoCarrito.push(itemAgregado);
  //   }
  //   setCarrito(nuevoCarrito);
  // };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoría: {item.categoria}</p>
          <p className="precio">${item.precio}</p>
          <p className="stock">Stock: {item.stock}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            //handleAgregar={handleAgregar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
