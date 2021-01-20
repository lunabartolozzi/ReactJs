import React from 'react';
import Carrito from './carrito.svg';



const CartWidget = () => {
    return (
        <div>
           
                   
            <a href="/"> <img className="carrito" src={Carrito}
                    alt="carrito" /></a>
                
      </div>
    )
}

export default CartWidget;
