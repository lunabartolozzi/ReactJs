import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./cart.css";
import { Link } from "react-router-dom";




const Cart = () => {
	const { carrito, total, clear, totalesProducto, totalCosto  } = useContext(CartContext);

	

  return (
	
    <>
    {carrito.map((producto) => (
        <div key={producto.id}>
  
     <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
<div className="container">
	<table id="cart" className="table table-hover table-condensed">
    				<thead>
						<tr>
							<th className="category-1" >Producto</th>
							<th className="category-2" >Precio</th>
							<th className="category-3" >Cantidad</th>
							<th className=" category-4 text-center">Subtotal</th>
							<th className="category-5"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td data-th="Product">
								<div className="row">
									<div className="col-sm-2 hidden-xs"><img src={producto.pictureUrl} alt="..." className="img-responsive"/></div>
									<div className="col-sm-10">
                    <h4 className="nomargin">{producto.title}</h4>
										<p> {producto.description} </p>
									</div>
								</div>
							</td>
							<td data-th="Price"> {producto.price} </td>
							<td data-th="Quantity">
                 {producto.cantidadSeleccionada}
							</td>
							<td data-th="Subtotal" className="text-center"><p>{producto.price*producto.cantidad}</p> </td>
							<td className="actions" data-th="">
								<button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
								<button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>								
							</td>
						</tr>
					</tbody>
					<tfoot>
				
						<tr>
							<td><Link to="/" className="btn btn-warning"><i className="fa fa-angle-left"></i> Seguir Comprando</Link></td>
							<td colspan="2" className="hidden-xs"></td>
							<td className="hidden-xs text-center"><strong> <p></p> Total {total} </strong></td>	
							<td><Link to="/" onClick={clear} className="btn btn-success btn-block">Reiniciar Carrito <i className="fa fa-angle-right"></i></Link></td>
							<td><Link to="/" className="btn btn-success btn-block">Pagar <i className="fa fa-angle-right"></i></Link></td>
						</tr>
					</tfoot>
				</table>
        </div>
      
     
      </div>
  
      ))}
    </>
  )
}

export default Cart


/*  {carrito.map((producto) => (
        <div key={producto.id}>
          <p> {producto.cantidadSeleccionada} </p>
         {/*  <p> {producto.pictureUrl} </p> */
        /*  <p> {producto.title} </p>
         </div>
       ))}  */