import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ infoproductos }) {
  const [ items, setItems ] = useState([])

  const { id } = useParams()

  useEffect(() => {
      if(id){
          const categoryProducts = infoproductos.filter(info => info.categoryId == id)
          setItems(categoryProducts)
      }
      else{
          setItems(infoproductos)
      }

  }, [id, infoproductos])

  return (
   
      <div className="item-list">
     {items.length > 1 ? <ItemList infoproductos={items} /> : <h2 className="style-h2">Buscando productos..</h2>}    
   {/*   { categoryProducts ? <h5>Resultados encontrados para {categoryProducts}... </h5> : <> </> } */}
      </div>
     
   
  );
};

export default ItemListContainer;
