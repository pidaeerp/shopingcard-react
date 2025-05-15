//import { Card } from "./components/Card/Card";
//import Copunter from "./components/Counter/Copunter";
// import ItemListContainer from "./components/Products/ItemListContainer";
//import Text from "./components/Text/Text";
//import { Usuario } from "./components/Usuario/Usuario";
// import Pokemon from "./components/Pokemon/Pokemon";
// import PokemonList from "./components/Pokemon/PokemonList";
//import { useState } from "react";
import Contacto from "./components/Contacto/Contacto";
import Navbar from "./components/Navbar/Navbar";
import ItemDatailContainer from "./components/ProductContainer/ItemDatailContainer";
import ItemListContainer from "./components/ProductContainer/ItemListContainer";
import Nosotros from "./components/ProductContainer/Nosotros";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { CartContext } from "./context/CartContext";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/Checkout/Checkout";

// function App() {
//   return (
//     <div className="App">
//       {/* <Copunter /> */}
//       {/* <Text /> */}
//       {/* <ItemListContainer /> */}
//       {/* <Pokemon /> */}
//       {/* <PokemonList /> */}
//     </div>
//   );
// }

function App() {
  return (
    <div>
      {/* <CartContext.Provider value={{ user, edad }}> */}
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDatailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          {/* <ItemListContainer />
        <ItemDatailContainer itemId={2} /> */}
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <Usuario nombre="Orva" edad={45} pais="Perú" />
//         <Usuario nombre="Messi" edad={36} pais="Argentina" />
//         <Card />
//       </div>
//     </div>
//   );
// }

export default App;
