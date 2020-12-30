import React from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

function Navbar() {
  return (
    <>
      <header href="Footer.js" className="navbar">
        <a href="Footer.js" className="navbar-logo">Store</a>
        <CartWidget/>
        <a href="Footer.js" className="navbar-item">Inicio</a>
        <a href="Footer.js" className="navbar-item">Tienda</a>
        <a href="Footer.js" className="navbar-item">Sobre nosotros</a>
        <a href="Footer.js" className="navbar-item">Contacto</a>
        <a href="Footer.js" className="navbar-item">Info</a>
       
      </header>
    </>
  );
}
export default Navbar;
