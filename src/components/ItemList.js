import React from "react";
import Item from "./Item";


const ItemList = ({articulos}) => {
  return (
    <div className="grid-list">
      {articulos.map((articulo) => (
        <Item key={articulo.id} item={articulo}  />
      ))}
      
    </div>
  );
};

export default ItemList;
