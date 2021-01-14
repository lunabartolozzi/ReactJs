import React, { useState } from "react";
import ItemCount from "./ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";


function ItemDetail({
  title,
  price,
  pictureUrl,
  description,
  categoryId,
}) {
  const [cantidadSeleccionada, setcantidadSeleccionada] = useState(0);
  const [stock, setStock] = useState(20);
  const agregarCarrito = (cantidad) => {
    if (stock >= cantidad) {
      setcantidadSeleccionada(cantidadSeleccionada + cantidad);
      setStock(stock - cantidad);
    }
  };

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
          <ItemCount stock={stock} initial="0" onAdd={agregarCarrito} />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
