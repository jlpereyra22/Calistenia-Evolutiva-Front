import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { consultarApiCliente } from "../helpers/queris";
import TablaCliente from "./socios/TablaCliente";
import Form from "react-bootstrap/Form";

const Administrador = () => {
  const [clientes, setClientes] = useState([]);
  const [clienteBuscado, setClienteBuscado] = useState("");
  useEffect(() => {
    consultarApiCliente().then((respuesta) => {
      setClientes(respuesta);
    });
  }, []);
  
  const searcher = (e) => {
    setClienteBuscado(e.target.value);
    console.log(e.target.value);
  };
 
  const results = !clienteBuscado ? clientes : clientes.filter((dato)=> dato.Nombre.toLowerCase().includes(clienteBuscado.toLocaleLowerCase()))


  return (
    <section className="bgGradient mainSection">
      <Container className="text-center p-5 text-white font">
        <div>
          
        </div>
        <div>
          <h2>Administrador de Clientes</h2>
          <hr />
          <Form className="text-start m-2 fs-5">
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label >Buscar Cliente</Form.Label>
              <Form.Control
                value={clienteBuscado}
                onChange={searcher}
                type="text"
                placeholder="Ingrese el Nombre"
                className="inputSearch"
              />
             
            </Form.Group>

           
          </Form>
        </div>
        <div className="d-flex justify-content-end">
          
          <Link
            className="m-3 btn btn-outline-success"
            size="sm"
            to="administrar/agregarcliente"
          >
            Agregar Cliente
          </Link>
        </div>
        <div>
          <h3>Tabla de Miembros</h3>
          <hr />
         
        </div>
        <div className="table-responsive">
          <Table bordered hover size="sm" className="text-white  colorTable" variant="dark" >
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
              {results.map((cliente) => (
                <TablaCliente
                  key={cliente.
                    _id}
                  cliente={cliente}
                  setCliente={setClientes}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default Administrador;
