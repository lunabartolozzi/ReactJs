import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({ data }) => {
  const [detalles, setDetalles] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const item = data.find((product) => product.id === parseInt(id));
    setDetalles(item);
  }, [id]);

  return (
    <div className="itemDetailContainer">
      <ItemDetail item={detalles} />
    </div>
  );
};

export default ItemDetailContainer;
