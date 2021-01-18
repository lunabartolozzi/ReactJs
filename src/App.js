import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { infoproductos} from "./components/InfoProductos";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";

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
      </Switch>
      </BrowserRouter>
      <Contacto/>
      <Footer />
     
     
    </>
  );
}
export default App;
