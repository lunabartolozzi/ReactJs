import React, { useState } from 'react';
import Agenda from './agenda2021.jpg';
import ItemCount from "./ItemCount";

function ItemListContainer() {
  const [cantidadSeleccionada, setcantidadSeleccionada] = useState(0);
  const [stock, setStock] = useState(20);
  const agregarCarrito = (cantidad) => {

    if (stock >= cantidad) {
      setcantidadSeleccionada(cantidadSeleccionada + cantidad);
      setStock(stock - cantidad);
       }
    }

  return ( 
      <>
        <div className="card">
        <img src={Agenda} className="card-img-top" alt="producto" />
        <div className="card-body">
          <h5 className="card-title">Agenda 2021</h5>
          <p className="card-text">
            Agenda 2021, dia por dia, contiene 160 hojas, anillada y elastico en la tapa
             
          </p>
         
          <ItemCount stock={stock} initial="0" onAdd={agregarCarrito}/>
        </div>
      </div>
      </>
    )
  }

export default ItemListContainer;
