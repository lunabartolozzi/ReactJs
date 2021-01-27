import React, { useContext } from "react";
import { CartContext } from "./CartContext";


function CartItem({ articulo }) {
  const { removeItem } = useContext(CartContext);
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
            <tr>
              <td data-th="Product">
                <div className="row">
                  <div className="col-sm-2 hidden-xs">
                    <img
                      src={articulo.item.pictureUrl}
                      alt="imagen"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-sm-10">
                    <h4 className="nomargin">{articulo.item.title}</h4>
                    <p> {articulo.item.description} </p>
                  </div>
                </div>
              </td>
              <td data-th="Price">  ${articulo.item.price} </td>
              <td data-th="Quantity">{articulo.cantidadSeleccionada}</td>
              <td data-th="Subtotal" className="text-center">
                <p>${articulo.item.price*articulo.cantidadSeleccionada}</p>
              </td>
              <td className="actions" data-th="">
               
                <button   onClick={() => removeItem(articulo)}  className="btn btn-danger btn-sm">
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
          
      </div>
    </>
  );
}

export default CartItem;
