import React from "react";
import Agenda from './agenda2021.jpg';

function ItemListContainer ({greeting}) {
    return ( 
        <div className="card">
        <img src={Agenda} className="card-img-top" alt="producto" />
        <div className="card-body">
          <h5 className="card-title">Agenda 2021</h5>
          <p className="card-text">
           Agenda 2021, dia por dia, contiene 160 hojas, anillada y elastico en la tapa
          </p>
          <a href="hola.html" className="btn btn-primary">
           Comprar
          </a>
        </div>
      </div>
    )
}

export default ItemListContainer;
