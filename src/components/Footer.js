import React from "react";
import "./footer.css"

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
              <li><a href="http://scanfcode.com/category/c-language/">Papeleria</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Agendas</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Resaltadores</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Cartucheras</a></li>
              <li><a href="http://scanfcode.com/category/android/">Carpetas</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Atajos</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">Inicio</a></li>
              <li><a href="http://scanfcode.com/contact/">Tienda</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Productos</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Sobre Nosotros</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Info</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="#"> luna.bartolozzi</a>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  );
};

export default Footer;
