import React from "react";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Este es mi primer producto"  />
    </>
  );
};
export default App;
