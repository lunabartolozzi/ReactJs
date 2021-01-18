import React from 'react';
import Carrito from './carrito.svg';



const CartWidget = () => {
    return (
        <>
            <a href="/"> <img className="carrito" src={Carrito}
            alt="carrito"/></a>
      </>
    );
}

export default CartWidget;
