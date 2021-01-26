
import { CartContext } from "./CartContext";
import "./cart.css";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext } from "react";

const Cart = () => {
const { carrito, total, clear } = useContext(CartContext);
return (
    <>
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
                  className="btn btn-clear btn-block"
                >
                  Reiniciar Carrito <i className="fa fa-angle-right"></i>
                </Link>
				  </td>
				  <td colspan="2" className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong className="total">Total {total}</strong>
              </td>
              <td>
                <Link to="/" className="btn btn-success btn-block">
                  Pagar <i className="fa fa-angle-right"></i>
                </Link>
              </td>
            </tr>
          </tfoot>
  </>
    );
  }
  
  export default Cart