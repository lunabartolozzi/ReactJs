import React, { useState } from "react";
import ItemCount from "./ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";


function ItemDetail({item, setCarrito, carrito}) {
  const [stock, setStock] = useState(10);
  const [sumado, setSumado] = useState(false);
  const sumarAlCarrito = (cantidadSeleccionada) => {
    if (stock >= cantidadSeleccionada) {
      setCarrito(...carrito, {
        ...item,
        cantidadSeleccionada: cantidadSeleccionada,
      });
      setStock(stock - cantidadSeleccionada)
      setSumado(true);
    }
  };
  const { title, price, pictureUrl, description, categoryId } = item;
  return (
    <>
      <div className="body-itemdetail">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Inicio</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {categoryId}
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
        <div className="info-detail">
          <img src={pictureUrl} className="img-detail rounded float-left" />
          <h1> {title} </h1>
          <p className="price-detail"> {price} </p>
          <p className=" text-detail text-lg-left">{description}</p>
          {sumado ? (
            <div>
              <a href="/cart" className="btn btn-primary"> Finalizar compra</a>
            </div> 
          ) : (
              <div className="precio">
                 <ItemCount stock={stock} initial="0" onAdd={sumarAlCarrito} />
     
               </div>
            )}
 </div>
      </div>
    </>
  );
}

export default ItemDetail;
