import React, { useState, useEffect } from "react";
import { infoproductos } from "./InfoProductos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({setCarrito, carrito}) => {
  const [detalles, setDetalles] = useState({});
 
  const { id } = useParams();

  useEffect(() => {
    getItems.then((resultado) => {
      const item = resultado.find((producto) => producto.id === parseInt(id));
      setDetalles(item);
    });;
  }, [id]);
  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(infoproductos);

    }, 2000);
  });
  return (
    <div className="itemDetailContainer">
   
        <ItemDetail
          setCarrito={setCarrito}
          carrito={carrito}
          item={detalles}
        />
    
  
    </div>
  );
};

export default ItemDetailContainer;
