import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { consultarApiCaja } from "../../helpers/queris";
import TablaCaja from "./TablaCaja";

const CajaDiaria = () => {
  const [cajaDiaria, setCajaDiaria] = useState([]);
  const [cajaIngreso, setCajaIngreso] = useState([]);
  const [cajaEgreso, setCajaEgreso] = useState([]);

  useEffect(() => {
    consultarApiCaja().then((respuesta) => {
      setCajaDiaria(respuesta);
    });
    consultarApiCaja().then((respuesta) => {
      setCajaIngreso(
        respuesta.filter((asiento) => asiento.Operacion === "Ingreso")
      );
    });
    consultarApiCaja().then((respuesta) => {
      setCajaEgreso(
        respuesta.filter((asiento) => asiento.Operacion === "Egreso")
      );
    });
  }, []);

 

  let sumaIngreso = cajaIngreso.reduce(
    (acumulador, actual) => acumulador + actual.Monto,
    0
  );
  let sumaEgreso = cajaEgreso.reduce(
    (acumulador, actual) => acumulador + actual.Monto,
    0
  );



  const resultado = sumaIngreso - sumaEgreso;
 

  return (
    <section className="mainSection bgGradient font">
      <Container className="text-center text-white my-3 font">
        <div>
          <h2>Caja Diaria</h2>
          <hr />
          <div className="text-end my-5">
            <Link
              className="m-3 btn btn-outline-success fs-4 "
              size="sm"
              to="administrar/formCaja"
            >
              Asiento <i className="bi bi-plus-circle-fill"></i>
            </Link>
          </div>
          <div className="table-responsive">
            <Table bordered hover size="sm" className="text-white " variant="dark">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Ingreso/Egreso</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Operador</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {cajaDiaria.map((cajaDiaria) => (
                  <TablaCaja
                    key={cajaDiaria._id}
                    caja={cajaDiaria}
                    setCaja={setCajaDiaria}
                  />
                ))}
              </tbody>
            </Table>
          </div>

          <div  > 
            <Table
              bordered
              hover
              size="lg"
              className="text-white d-flex flex-row-reverse  "
            >
              <thead>
                <tr>
                  <th className="fs-3">Total</th>
                  <th className="text-warning fs-3">${resultado}</th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CajaDiaria;
