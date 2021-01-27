import React, { useState, useEffect } from "react";
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
import { firestore } from "./firebaseConfig";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const db = firestore;
    const collection = db.collection("articulos");
    const query = collection.get();
    query
      .then((result) => {
        setProductList(result.docs.map((art) => ({ id: art.id, ...art.data() })));
        console.log(productList);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(productList);
  }, [productList]);

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Inicio />
              <ItemListContainer data={productList} />
            </Route>
            <Route exact path="/category/:id">
              <ItemListContainer data={productList} />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer data={productList} />
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