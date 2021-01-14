import React from "react";

const Contacto = () => {
  return (
    <>
      <div className="body-contacto">
        <div className="container">
          <form>
            <h2>Contacto</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="first">Nombres y Apellidos:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombres y Apellidos"
                    id="first"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label for="phone">Celular:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Numero de celular"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="email">Correo electronico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-contacto">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;
