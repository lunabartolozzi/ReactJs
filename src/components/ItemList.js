import React, { useState, useEffect } from "react";
import Item from "./Item";


const ItemList = ({infoproductos}) => {
 /*  const [info, setInfo] = useState([]); */

 /*  useEffect(() => {
    obtenerInfo.then((informacion) => setInfo(informacion));
  }, []);
 */
  /* const obtenerInfo = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(infoproductos);
    }, 2000);
  }); */
  return (
    <div className="grid-list">
      {infoproductos.map((elemento) => (
        <Item item={elemento}  />
      ))}
      
    </div>
  );
};

export default ItemList;
