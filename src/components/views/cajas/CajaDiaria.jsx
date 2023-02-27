import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const CajaDiaria = () => {
  return (
    <section className="mainSection bgGradient">
      <Container className="text-center text-white my-3 ">
        <div>
          <h2>Caja Diaria</h2>
          <hr />
          <div className="text-end my-5">
            <Button variant="outline-success" size="lg">
              Asiento <i className="bi bi-plus-circle-fill"></i>
            </Button>
          </div>
          <div>
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
                <tr>
                  <td>Aguas Bachur</td>
                  <td>Egreso</td>
                  <td>3000</td>
                  <td>Fecha</td>
                  <td>Hora</td>
                  <td>Agustin</td>
                  <td>
                    {" "}
                    <Button variant="danger" className="m-1" size="sm">
                      <i className="bi bi-bookmark-x-fill  text-white-50"></i>
                    </Button>
                    <Button variant="warning" className="m-1" size="sm">
                      <i className="bi bi-pencil-square text-white-50"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div  >
           
            <Table
              bordered
              hover
              size="lg"
              className="text-white d-flex flex-row-reverse "
            >
              <thead>
                <tr>
                  <th  className="fs-1">Total</th>
                  <th className="text-warning fs-1" >$35000</th>
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
