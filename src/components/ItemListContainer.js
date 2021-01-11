import React, { useState, useEffect } from 'react';
import Agenda from './agenda2021.jpg';
import Item from "./Item";
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ infoproductos }) {
  const [ items, setItems ] = useState([])

  const { id } = useParams()

  useEffect(() => {
      if(id){
          const category = infoproductos.filter(info => info.categoryId == id)
          setItems(category)
      }
      else{
          setItems(infoproductos)
      }

  }, [id, infoproductos])

  return (
    <>
      <div className="item-list">
     {infoproductos.length > 1 ? <ItemList infoproductos={items} /> : <h2 className="style-h2">Buscando productos..</h2>}    
      
      </div>
     
    </>
  );
};

export default ItemListContainer;
