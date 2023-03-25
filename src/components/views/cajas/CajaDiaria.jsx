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

  console.log(cajaIngreso);
  console.log(cajaEgreso);

  let sumaIngreso = cajaIngreso.reduce(
    (acumulador, actual) => acumulador + actual.Monto,
    0
  );
  let sumaEgreso = cajaEgreso.reduce(
    (acumulador, actual) => acumulador + actual.Monto,
    0
  );

  console.log(sumaIngreso);
  console.log(sumaEgreso);

  const resultado = sumaIngreso - sumaEgreso;
  console.log(resultado);

  return (
    <section className="mainSection bgGradient">
      <Container className="text-center text-white my-3 ">
        <div>
          <h2>Caja Diaria</h2>
          <hr />
          <div className="text-end my-5">
            <Link
              className="m-3 btn btn-outline-success fs-4"
              to="/caja/formCaja"
            >
              Asiento <i className="bi bi-plus-circle-fill"></i>
            </Link>
          </div>
          <div className="table-responsive">
            <Table bordered hover size="sm" className="text-white">
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

          <div>
            <Table
              bordered
              hover
              size="lg"
              className="text-white d-flex flex-row-reverse "
            >
              <thead>
                <tr>
                  <th className="fs-1">Total</th>
                  <th className="text-warning fs-2">${resultado}</th>
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
