import React from "react";
import Item from "./Item";


const ItemList = ({articulos}) => {
  return (
    <div className="grid-list" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}} >
      {articulos.map((articulo) => (
        <Item key={articulo.id} item={articulo}  />
      ))}
      
    </div>
  );
};

export default ItemList;
