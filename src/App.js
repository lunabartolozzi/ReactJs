import React from "react";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
  return (
    <>
      <Navbar  />
      <ItemListContainer greeting="Este es mi primer producto"  />
    </>
  );
};
export default App;
