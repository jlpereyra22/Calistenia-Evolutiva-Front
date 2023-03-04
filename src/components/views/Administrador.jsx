import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";
import { consultarApiCliente } from "../helpers/queris";
import TablaCliente from "./socios/TablaCliente";


const Administrador = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    consultarApiCliente().then((respuesta) => {
      setClientes(respuesta);
    });
  }, []);

  return (
    <section className="bgGradient mainSection">
      <Container className="text-center p-5 text-white">
        <div>
          <h2>Administrador de Clientes</h2>
          <hr />
        </div>
        <div className="d-flex justify-content-end">
          <Button variant="outline-success" className="m-3" size="sm">
            Agregar Administrador
          </Button>
          <Link
            className="m-3 btn btn-outline-success"
            size="sm"
            to="/agregarcliente"
          >
            Agregar Cliente
          </Link>
        </div>
        <div>
          <h3>Tabla de Miembros</h3>
          <hr />
        </div>
        <div className="table-responsive">
          <Table bordered hover size="sm" className="text-white">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Dni</th>
                <th>Telefono</th>
                <th>Mail</th>
                <th>F.Nacimiento</th>
                <th>Estado</th>
                <th>Pago</th>
                <th>Monto</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <TablaCliente key={cliente.id} cliente={cliente}  setCliente={setClientes}/>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default Administrador;
