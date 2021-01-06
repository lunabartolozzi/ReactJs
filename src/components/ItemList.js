import React, { useState, useEffect } from "react";
import Item from "./Item";
import { InfoProductos } from "./InfoProductos";

const ItemList = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    obtenerInfo.then((informacion) => setInfo(informacion));
  }, []);

  const obtenerInfo = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(InfoProductos);
    }, 2000);
  });
  return (
    <div className="grid-list">
      {info.map((elemento) => (
        <Item item={elemento}  />
      ))}
      ;
    </div>
  );
};

export default ItemList;
