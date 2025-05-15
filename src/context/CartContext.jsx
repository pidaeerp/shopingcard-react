import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);
  // const user = "Orva";
  // const edad = 45;

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    //console.log(itemAgregado);
    const nuevoCarrito = [...carrito];
    const estaEnCarrito = nuevoCarrito.find(
      (prod) => prod.id === itemAgregado.id
    );

    if (estaEnCarrito) {
      //console.log("Está en el carrito");
      estaEnCarrito.cantidad += cantidad;
    } else {
      //console.log("No está");
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const limpiarCard = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    return () => {};
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        limpiarCard,
      }}>
      {children}
    </CartContext.Provider>
  );
};
