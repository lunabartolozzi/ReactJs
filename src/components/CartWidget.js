import React from 'react';
import { Link } from 'react-router-dom';
import Carrito from './carrito.svg';



const CartWidget = ({cantidad}) => {
    return (
        <div>
           
                   
            <Link to="/"> <img className="carrito" src={Carrito}
                    alt="carrito" />  {cantidad} </Link>
                
      </div>
    )
}

export default CartWidget;
