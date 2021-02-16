import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import CartProvider from "./components/CartContext";
import Cart from "./components/Cart";
import Firebase from "./components/Firebase";
import Item from "./components/Item";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
        <Navbar />
        <Route exact path="/ItemListContainer">
            <ItemListContainer />
          </Route>
        
          <Switch>
            <Route exact path="/firebase">
              <Firebase/>
            </Route>
            <Route exact path="/">
              <Inicio />
           
            </Route>
            <Route exact path="/category/:category">
              <ItemListContainer/>
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Contacto />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}
export default App;