import React from 'react';
import { Link } from 'react-router-dom';
import Carrito from './carrito.png';
import "./cart.css";



const CartWidget = ({cantidadSeleccionada}) => {
    return (
        <div>
           
                   
            <Link to="/cart">
                <img className="carrito" src={Carrito} alt="carrito" />
              <p  className="number-cart"> {cantidadSeleccionada}</p> 
            </Link>
                
      </div>
    )
}

export default CartWidget;
