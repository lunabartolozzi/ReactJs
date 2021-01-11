import React, { useState } from 'react';


function ItemCount({ stock, initial, onAdd }) {
  
  
    const [contador, setContador] = useState(parseInt(initial));


    const aumentarContador = () => {
        if( contador <  stock ){
            setContador(contador + 1)
        }
    }
    const clickAdd = () => {
        onAdd(contador);
        setContador(parseInt(initial))
        console.log('Producto añadido al carrito')
    };
    const restarContador = () => {
        if (contador > parseInt(initial)) {
            setContador(contador - 1) 
        }
  
    }
    return (
      <>
        <div className="contador">
          <div className="style-contador">
            <button onClick={restarContador} className="button-contador1">
              -
            </button>
            <p className="text-contador">{contador}</p>
            <button onClick={aumentarContador} className="button-contador2">
              +
            </button>
          </div>
          <button className="agregar-carrito" onClick={clickAdd}>
            Agregar Carrito
          </button>
        </div>
      </>
    );
};

export default ItemCount;
