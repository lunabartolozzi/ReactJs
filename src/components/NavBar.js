import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CartWidget from "./CartWidget";
import { infoproductos } from "./InfoProductos";
import ItemListContainer from "./ItemListContainer";


function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  }
  return (
    <>
      <header href="Footer.js" className="navbar">
       <Link to="/" className="navbar-logo">Store </Link> 
       <Link to="/" className="navbar-item">Inicio</Link> 
       <Link to="/" className="navbar-item">Tienda</Link> 
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
          <DropdownToggle caret className="style-dropdown" >
          <Link className="style-productos" href="#">Productos</Link>  
          </DropdownToggle>
          <DropdownMenu>
        
         <DropdownItem> 
              <DropdownItem divider />
              { infoproductos.map( category => <Link to={`/categoria/${infoproductos.categoryId}`}>
                    <p>{category.categoryId}</p>
                    </Link>)}</DropdownItem>
            <DropdownItem divider />
             {/* Bootstrap del navbar deseado */}
           {/*      <DropdownItem> <Link className="option-dropdown" href=""> Cuadernos - Carpetas</Link></DropdownItem>
                <DropdownItem divider/>
            <DropdownItem> <Link className="option-dropdown" href=""> Utiles y resaltadores</Link></DropdownItem>
            <DropdownItem divider/>
            <DropdownItem> <Link className="option-dropdown" href=""> Mochilas y cartucheras</Link></DropdownItem>
            <DropdownItem divider/>
            <DropdownItem> <Link className="option-dropdown" href=""> Accesorios</Link></DropdownItem> */}
            
            
          </DropdownMenu>
</Dropdown>  
<Link href="Footer.js" className="navbar-item">Sobre nosotros</Link>
       <Link className="navbar-item">Contacto</Link>
        <CartWidget/>
</header>   
</>
  );
}
export default Navbar;
   
  
