import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount";
import React, { useState } from 'react';
import Footer from "./components/Footer";





function App () {
  const [cantidadSeleccionada, setcantidadSeleccionada] = useState(0);
  const [stock, setStock] = useState(20);
  const agregarCarrito = (cantidad) => {

    if (stock >= cantidad) {
      setcantidadSeleccionada(cantidadSeleccionada + cantidad);
      setStock(stock - cantidad);
       }
    }


  return (
    <>
      <Navbar/>
     <ItemListContainer/>
      <ItemCount stock={stock} initial="0" onAdd={agregarCarrito} />
    <Footer/>
    </>
  );
};
export default App;
