import { CartContext } from "./CartContext";
import "./cart.css";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext } from "react";

function Cart() {
  const { carrito,  clear, CartQuantity, CartPrice } = useContext(CartContext);
  return (
    <div>
      {CartQuantity() > 0 ? (
        <div>
          <table id="cart" className="table table-hover table-condensed">
            <thead className="category-cart">
              <tr>
                <th className="category-1">Producto</th>
                <th className="category-2">Precio</th>
                <th className="category-3">Cantidad</th>
                <th className=" category-4 text-center">Subtotal</th>
                <th className="category-5"></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((articulo) => (
                <CartItem articulo={articulo} />
              ))}
            </tbody>
          </table>
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
                <strong className="total">Total: ${CartPrice()}</strong>
              </td>
              <td>
                <Link to="/firebase" className="btn btn-success btn-block">
                  Pagar <i className="fa fa-angle-right"></i>
                </Link>
              </td>
            </tr>
          </tfoot>
        </div>
      ) : (
        <div>
          <p>No hay articulo! </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
