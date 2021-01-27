import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ data }) {
    const [articulos, setArticulos] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        if (category) {
            const productosFiltrados = data.filter(
                (articulo) => articulo.categoryID === category
            );
            setArticulos(productosFiltrados);
        } else {
            setArticulos(data);

        }
    }, [category, data])
    return (
        <div>
            {
                category ? (
                    <h3>Resultado de busqueda..</h3>
                ) : (
                    <> </>    
                )}
      <div className="item-list">
     <ItemList articulos={articulos} /> 

      </div>
            </div>
    )
  
};

export default ItemListContainer;
