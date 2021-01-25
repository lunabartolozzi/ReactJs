import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function CartItem({ item }) {
  const { carrito, total, clear, cantidad } = useContext(CartContext);

  return (
    <>
      <link
        href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

      <link
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th className="category-1">Producto</th>
              <th className="category-2">Precio</th>
              <th className="category-3">Cantidad</th>
              <th className=" category-4 text-center">Subtotal</th>
              <th className="category-5"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-th="Product">
                <div className="row">
                  <div className="col-sm-2 hidden-xs">
                    <img
                      src={item.pictureUrl}
                      alt="imagen"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-sm-10">
                    <h4 className="nomargin">{item.title}</h4>
                    <p> {item.description} </p>
                  </div>
                </div>
              </td>
              <td data-th="Price"> {item.price} </td>
              <td data-th="Quantity">{item.cantidadSeleccionada}</td>
              <td data-th="Subtotal" className="text-center">
                <p>{item.price * item.cantidadSeleccionada}</p>
              </td>
              <td className="actions" data-th="">
                <button className="btn btn-info btn-sm">
                  <i className="fa fa-refresh"></i>
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
          </tbody>
         
        </table>
      </div>
    </>
  );
}

export default CartItem;
