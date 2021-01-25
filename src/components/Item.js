/* Item descriptivo del producto */
import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  const { id, title, info, price, pictureUrl } = item;

  return (
    <>
      <div className="card">
        <img src={pictureUrl} className="card-img-top" alt="producto" />
        <div className="card-body">
          <p className="card-text">{id}</p>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{info}</p>
          <p className="card-text">{price}</p>
          <button className="style-btn">
            <Link to={"/item/" + id} > Ver detalles </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
