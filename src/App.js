import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount";
import React, { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { infoproductos} from "./components/InfoProductos";
import { BrowserRouter, Switch, Route } from 'react-router-dom';





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

  return (
    <>
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer infoproductos={items} />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer infoproductos={items} />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
      </Switch>
      </BrowserRouter>
      <Footer />
       
    </>
  );
}
export default App;
