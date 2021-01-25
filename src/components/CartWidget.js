import React from 'react';
import { Link } from 'react-router-dom';
import Carrito from './carrito.png';
import "./cart.css";



const CartWidget = ({cantidad}) => {
    return (
        <div>
           
                   
            <Link to="/">
                <img className="carrito" src={Carrito} alt="carrito" />
              <p  className="number-cart"> {cantidad}</p> 
            </Link>
                
      </div>
    )
}

export default CartWidget;
