import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./cart.css";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";


function Cart() {
	const { carrito, total, clear, cantidad } = useContext(CartContext);
  return (
   <>
    <div>
    { cantidad < 0 ? (
          <div>
            <h2>Tu carrito</h2>
          {carrito.map((item) => (
            <CartItem item={item}/>
             ))}    
         <tfoot>
              <tr>
                <td>
                  <Link to="/" className="btn btn-warning">
                    <i className="fa fa-angle-left"></i> Seguir Comprando
                  </Link>
                </td>
               
                <td>
                  <Link
                    to="/"
                    onClick={clear}
                    className="btn btn-clear btn-block">
                    Reiniciar Carrito <i className="fa fa-angle-right"></i>
                  </Link>
            </td>
            <td colspan="2" className="hidden-xs"></td>
                <td className="hidden-xs text-center">
                  <strong className="total">Total: ${total}</strong>
                </td>
                <td>
                  <Link to="/" className="btn btn-success btn-block">
                    Pagar <i className="fa fa-angle-right"></i>
                  </Link>
                </td>
              </tr>
            </tfoot>
          </div>
        ) : (
            <div>
            <h3>Aún no elegiste tus productos</h3>
               <Link to={"/"}>
                  <button  className="btn-success" onClick={clear} variant="contained" color="primary">
                 Volver a la tienda
                  </button>
              </Link>
              </div>
  )}
  </div>      
        </>
  );
}

export default Cart;


