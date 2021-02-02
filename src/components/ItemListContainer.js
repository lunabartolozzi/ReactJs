import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { firestore } from "../firebaseConfig";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const { category } = useParams();
  const [articulos, setArticulos] = useState([]);
  
  useEffect(() => {
    obtenerArticulos.then((resultado) => {
      if (category) {
        const productosFiltrados = resultado.filter(
          (articulos) => articulos.categoryId === category
        );
        setArticulos(productosFiltrados);
      } else {
        setArticulos(resultado);
      }
    });
  }, [category]);
  const obtenerArticulos = new Promise((resolve, reject) => {
    const db = firestore;
    const collection = db.collection("articulos");
    const query = collection.get();
    query
    .then((result) => {
      const collectionItems = result.docs.map((art) => ({
        id: art.id,
        ...art.data(),
      }));
        resolve(collectionItems);
      })
      .catch((error) => {
          reject(error);
      });
  });
  return (
    <div>
      {category ? (
        <h3>Resultado de busqueda... {category}  </h3>
      ) : (
          <> </>
        )}
   
        <ItemList articulos={articulos} />
     
    </div>
  );
}

export default ItemListContainer;