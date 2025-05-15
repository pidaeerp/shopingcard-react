import React, { Fragment, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, limpiarCard } = useContext(CartContext);

  const handleLimpiarCard = () => {
    limpiarCard();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.titulo}</h2>
          <p>Precio Unit.: ${prod.precio}</p>
          <p>Precio Total: ${prod.precio * prod.cantidad}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <br />
        </div>
      ))}
      {carrito.length > 0 ? (
        <Fragment>
          <h2>Precio Total: ${precioTotal()}</h2>
          <button onClick={handleLimpiarCard}>Limpiar</button>
          <Link to="/checkout">Finalizar compra</Link>
        </Fragment>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </div>
  );
};

export default Carrito;
