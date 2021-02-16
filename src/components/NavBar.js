import React, {Fragment, useContext, useState} from "react";
import { Link } from "react-router-dom";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CartWidget from "./CartWidget";
import{CartContext} from "./CartContext"


function Navbar() {
  const { CartQuantity } = useContext(CartContext)
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  }
  return (
    <>
      <header className="navbar">
        <Link to="/" className="navbar-logo">
         Ría Libre
         </Link>
          <Link to="/" className="navbar-item">
            Inicio</Link>
       
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
          <DropdownToggle caret className="style-dropdown" >
                <Link className="style-productos" to="/">
                  Tienda
          </Link> 
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem> <Link className="option-dropdown" to="/ItemListContainer"> Todos los productos</Link></DropdownItem>
         
    
            <DropdownItem divider />
         
          <DropdownItem> <Link className="option-dropdown" to="/category/Cuadernos"> Cuadernos - Carpetas</Link></DropdownItem>
                <DropdownItem divider/>
            <DropdownItem> <Link className="option-dropdown" to="/category/Resaltadores"> Utiles y resaltadores</Link></DropdownItem>
            <DropdownItem divider/>
            <DropdownItem> <Link className="option-dropdown" to="/category/Cartucheras"> Mochilas y cartucheras</Link></DropdownItem>
            <DropdownItem divider/>
            <DropdownItem> <Link className="option-dropdown" to="/category/Agendas"> Agendas</Link></DropdownItem> 
            
            
          </DropdownMenu>
</Dropdown>  

        <Link className="navbar-item">Contacto</Link>
        {CartQuantity() < 1 ? (
          <Fragment />
        ):( 
          <CartWidget cantidad={CartQuantity()} />
        )
       }
      
</header>   
</>
  );
}
export default Navbar;
   
  
