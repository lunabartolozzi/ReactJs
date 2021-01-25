import React from "react";
import Item from "./Item";


const ItemList = ({infoproductos}) => {
  return (
    <div className="grid-list">
      {infoproductos.map((elemento) => (
        <Item item={elemento}  />
      ))}
      
    </div>
  );
};

export default ItemList;
