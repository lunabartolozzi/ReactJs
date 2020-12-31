import React from "react";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount";




const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <ItemCount/>
    </>
  );
};
export default App;
