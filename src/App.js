import React, { useState, useEffect } from 'react';
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { infoproductos} from "./components/InfoProductos";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import CartProvider  from './components/CartContext';
import Cart from './components/Cart'


function App() {
  
  const [items, setItems] = useState([])
  useEffect(() => {
    const promesa = new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve(infoproductos); 
      }, 2000);
    }
    )
    promesa.then( result => setItems(result)) 
    promesa.catch( err => console.log("Error!")) 

  }, []);
  const [carrito, setCarrito] = useState([]);
  return (
    <>
      <CartProvider>
      <BrowserRouter>
      
        <Navbar/>
        
        <Switch>
          <Route exact path="/">
          <Inicio />
            <ItemListContainer infoproductos={items} />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer infoproductos={items} />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer setCarrito={setCarrito} carrito={carrito} />
            </Route> 
            <Route exact path="/cart">
              <Cart/>
            </Route>
      </Switch>
      </BrowserRouter>
      <Contacto/>
      <Footer />
      </CartProvider>
     
    </>
  );
}
export default App;
