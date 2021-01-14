import React, {useState} from "react";
import { a } from "react-router-dom";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CartWidget from "./CartWidget";
import { infoproductos } from "./InfoProductos";
import ItemListContainer from "./ItemListContainer";
import Tienda from "./Tienda";



function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  }
  return (
    <>
      <header href="#" className="navbar">
       <a to="/" className="navbar-logo">Store </a> 
       <a to="/" className="navbar-item">Inicio</a> 
       
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
          <DropdownToggle caret className="style-dropdown" >
          <a className="style-productos" href="#">Tienda</a>  
          </DropdownToggle>
          <DropdownMenu>
        
    
            <DropdownItem divider />
             {/* Bootstrap del navbar deseado */}
          <DropdownItem> <a className="option-dropdown" href="/category/Cuadernos"> Cuadernos - Carpetas</a></DropdownItem>
                <DropdownItem divider/>
            <DropdownItem> <a className="option-dropdown" href="/category/Resaltadores"> Utiles y resaltadores</a></DropdownItem>
            <DropdownItem divider/>
            <DropdownItem> <a className="option-dropdown" href="/category/Cartucheras"> Mochilas y cartucheras</a></DropdownItem>
            <DropdownItem divider/>
            <DropdownItem> <a className="option-dropdown" href="/category/Agendas"> Agendas</a></DropdownItem> 
            
            
          </DropdownMenu>
</Dropdown>  

       <a className="navbar-item">Contacto</a>
        <CartWidget/>
</header>   
</>
  );
}
export default Navbar;
   
  
