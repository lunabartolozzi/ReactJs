import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestore } from "../firebaseConfig";

const ItemDetailContainer = () => {
  const [detalles, setDetalles] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = firestore;
    const itemCollection = db.collection("articulos");
    const articulos = itemCollection.where("id", "==", id);

    articulos.get().then((result) => {
      if (result.docs[0].data() === undefined) {
      } else {
        setDetalles({ id: result.docs[0].id, ...result.docs[0].data() });
      }
    });
  }, [id]);

  return (
    <div className="itemDetailContainer">
      <ItemDetail item={detalles} />
    </div>
  );
};

export default ItemDetailContainer;
