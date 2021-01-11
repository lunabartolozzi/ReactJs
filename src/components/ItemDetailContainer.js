import React, { useState, useEffect } from "react";
import { infoproductos } from "./InfoProductos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
          const i = infoproductos.find(productos => productos.id == id)
            console.log(i)
            resolve(i); 
        }, 2000);
        }
        )
        promesa.then(resultado => setItem(resultado)) 
        promesa.catch(err => console.log("No se pudo procesar")) 

    },  [id]);

  return (
    <div className="itemDetailContainer">
      {item ? (
        <ItemDetail
          id={item.id}
          title={item.title}
          info={item.info}
          price={item.price}
          pictureUrl={item.pictureUrl}
          description={item.description}
          categoryId={item.categoryId}
          stock={item.stock}
          initial={item.initial}
        />
      ) : (
        <h2>Cargando..</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;
