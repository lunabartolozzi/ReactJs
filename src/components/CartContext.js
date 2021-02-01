import React, { useState } from "react";

export const CartContext = React.createContext();

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  function CartPrice() {
    var totalCosto = 0;
    const totalesProducto = carrito.map((art) => art.item.price * art.cantidad ) 
    

    totalesProducto.map((precioItem) => (totalCosto = totalCosto + precioItem));
    return totalCosto;
  }
  function CartQuantity() {
    
    return carrito.reduce(
      (acumulador, articulo) => acumulador + articulo.cantidad,
      0
    );
  }

  function addItem(productoAAgregar) {
    if (isInCart(productoAAgregar)) {
      const itemEnCarrito = carrito.find(
        (articulo) => articulo.item.id === productoAAgregar.item.id
      );
      const carritoFiltrado = carrito.filter(
        (articulo) => articulo.item.id !== productoAAgregar.item.id
      );
      itemEnCarrito.cantidad =
        itemEnCarrito.cantidad +
        productoAAgregar.cantidad;

      setCarrito([...carritoFiltrado, itemEnCarrito]);
    } else {
      setCarrito([...carrito, productoAAgregar]);
    }
  }

  function removeItem(productoARemover) {
    if (isInCart(productoARemover)) {
      const carritoActualizado = carrito.filter(
        (articulo) => articulo.item.id !== productoARemover.item.id
      );

      setCarrito(carritoActualizado);
    }
  }

  function clear() {
    setCarrito([]);
  }

  function isInCart(productoAValidar) {
    return carrito.some(
      (articulo) => articulo.item.id === productoAValidar.item.id
    );
  }

  return (
    <>
      <CartContext.Provider
        value={{ carrito, addItem, removeItem, clear, CartPrice, CartQuantity}}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartProvider;
