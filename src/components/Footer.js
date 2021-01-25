import React from "react";
import "./footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
           
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Sobre Nosotros:</h6>
              <p className="text-justify">
                Somos <i>Libreria</i>, una tienda digital, con envio a todo el pais. Un catalogo super amplio de todo lo que puedas necesitar para el cole, la facu y la oficina.
              </p>
              <h5>Info de contacto:</h5>
              <ul>
                <li>Wpp: 11111111111111
                </li>
                <li>Correo: luna.bartolozzi@gmail.com</li>
                <li>Ubicación: CABA, Buenos Aires</li>
              </ul>
            </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categorias</h6>
            <ul className="footer-links">
              <li><Link to="http://scanfcode.com/category/c-language/">Papeleria</Link></li>
              <li><Link to="http://scanfcode.com/category/front-end-development/">Agendas</Link></li>
              <li><Link to="http://scanfcode.com/category/back-end-development/">Resaltadores</Link></li>
              <li><Link to="http://scanfcode.com/category/java-programming-language/">Cartucheras</Link></li>
              <li><Link to="http://scanfcode.com/category/android/">Carpetas</Link></li>
              <li><Link to="http://scanfcode.com/category/templates/">Templates</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Atajos</h6>
            <ul className="footer-links">
              <li><Link to="http://scanfcode.com/about/">Inicio</Link></li>
              <li><Link to="http://scanfcode.com/contact/">Tienda</Link></li>
              <li><Link to="http://scanfcode.com/contribute-at-scanfcode/">Productos</Link></li>
              <li><Link to="http://scanfcode.com/privacy-policy/">Sobre Nosotros</Link></li>
              <li><Link to="http://scanfcode.com/sitemap/">Info</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <Link to="/"> luna.bartolozzi</Link>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="/"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link className="twitter" to="/"><i className="fa fa-twitter"></i></Link></li>
              <li><Link className="dribbble" to="/"><i className="fa fa-dribbble"></i></Link></li>
              <li><Link className="linkedin" to="/"><i className="fa fa-linkedin"></i></Link></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  );
};

export default Footer;
