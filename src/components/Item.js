/* Item descriptivo del producto */
import React, { useState } from "react";
import ItemCount from "./ItemCount";

const Item = ({ item }) => {
  const { id, title, description, price, pictureUrl } = item;

  return (
    <>
      <div className="card">
        <img src={pictureUrl} className="card-img-top" alt="producto" />
        <div className="card-body">
          <p className="card-text">{id}</p>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
          <button className="style-btn">Ver detalle</button>
        </div>
      </div>
    </>
  );
};

export default Item;
