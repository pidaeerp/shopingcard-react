import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Carpishop</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Audio">
            Medias
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Electronics">
            Pantalones
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Music">
            Remeras
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Gaming">
            Buzos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/nosotros">
            Nosotros
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="#">
            Ayuda
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
