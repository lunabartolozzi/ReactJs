import React, {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";


function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  }
  return (
    <>
      <header href="Footer.js" className="navbar">
        <a href="Footer.js" className="navbar-logo">Store</a>
        <a href="Footer.js" className="navbar-item">Inicio</a>
        <a href="Footer.js" className="navbar-item">Tienda</a>
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
          <DropdownToggle caret className="style-dropdown" >
          <a className="style-productos" href="#">Productos</a>  
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem> 
              <DropdownItem divider />
              <a className="option-dropdown" href=""> Agendas</a></DropdownItem>
              <DropdownItem divider/>
                <DropdownItem> <a className="option-dropdown" href=""> Cuadernos - Carpetas</a></DropdownItem>
                <DropdownItem divider/>
            <DropdownItem> <a className="option-dropdown" href=""> Utiles y resaltadores</a></DropdownItem>
            <DropdownItem divider/>
            <DropdownItem> <a className="option-dropdown" href=""> Mochilas y cartucheras</a></DropdownItem>
            <DropdownItem divider/>
            <DropdownItem> <a className="option-dropdown" href=""> Accesorios</a></DropdownItem>
            
            
          </DropdownMenu>
</Dropdown>  
<a href="Footer.js" className="navbar-item">Sobre nosotros</a>
        <a href="Footer.js" className="navbar-item">Contacto</a>
        <CartWidget/>
</header>   
</>
  );
}
export default Navbar;
   
  
