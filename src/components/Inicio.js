import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./inicio.css";
import { Link } from "react-router-dom";


const Inicio = () => {
  return (
    <>
      <div>
        <img className="slider-incio" src="https://i.imgur.com/PgRnfvw.png" alt="" />
      </div>
<main>
   <div className="boxes">
     <div className="box box-vert-center">
       <h2>Cuadernos - Carpetas</h2>
       <p>Cuadernos A4 y todo tipo de carpetas</p>
            <img className="img" src="https://i.imgur.com/xQdlDc4.png" alt="" />
            <button className="button">
              <Link to="/category/Cuadernos"  className="style-link" >
                Comprar
                </Link>
              </button>
     </div>
     <div className="box">
       <h2>Utiles y resaltadores</h2>
       <p>Resaltadores pastel y los utiles mas lindos de diseño</p>
            <img className="img" src="https://i.imgur.com/6lpMtDB.png" alt="" />
            <button className="button">
              <Link to="/category/Resaltadores" className="style-link">
                Comprar
                </Link>
              </button>
     </div>
     <div className="box box-vert-center">
       <h2>Mochilas y Cartucheras</h2>
       <p>Mochilas cancheras de varios diseños </p>
            <img className="img" src="https://i.imgur.com/ORZ9tAk.png" alt="" />  
            <button className="button">
              <Link to="/category/Cartucheras" className="style-link">
                Comprar
                </Link>
              </button>
     </div>
     <div className="box">
       <h2>Agendas 2021</h2>
       <p>Elegí la agenda que mejor va con vos</p>
            <img className="img" src="https://i.imgur.com/5Dis5ST.png" alt="" />
            <button className="button">
            <Link to="/category/Agendas" className="style-link">
                  Comprar
                </Link>
              </button>
     </div>
  </div>
</main>
     
    </>
  );
};

export default Inicio;