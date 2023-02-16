import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Administrador = () => {
  return (
    <section className="bg-black mainSection">
      <Container className="text-center p-5 text-white">
        <div>
          <h2>Administrador de Clientes</h2>
          <hr />
        </div>
        <div className="d-flex justify-content-end">
          <Button variant="outline-success" className="m-3" size="sm">
            Agregar Administrador
          </Button>
          <Button variant="outline-success" className="m-3" size="sm">
            Agregar Cliente
          </Button>
        </div>
        <div>
          <h3>Tabla de Miembros</h3>
          <hr />
        </div>
        <div className="table-responsive">
          <Table bordered hover size="sm" className="text-white">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Dni</th>
                <th>Telefono</th>
                <th>Mail</th>
                <th>F.Nacimiento</th>
                <th>Estado</th>
                <th>Pago</th>
                <th>E/B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Subejo 1</td>
                <td>11111111</td>
                <td>42440007</td>
                <td>ejemplo@ejemplo.com</td>
                <td>01/01/2099</td>
                <td>Activo</td>
                <td>15/02/2023</td>
                <td>
                  {" "}
                  <Button variant="none" sz="sm"><i className="bi bi-bookmark-x-fill text-bg-danger"></i></Button>
                  <Button variant="none" sz="sm"><i className="bi bi-pencil-square text-bg-warning"></i></Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Subejo 2</td>
                <td>11111111</td>
                <td>42440007</td>
                <td>ejemplo@ejemplo.com</td>
                <td>01/01/2099</td>
                <td>Activo</td>
                <td>15/02/2023</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Subejo 3</td>
                <td>11111111</td>
                <td>42440007</td>
                <td>ejemplo@ejemplo.com</td>
                <td>01/01/2099</td>
                <td>Activo</td>
                <td>15/02/2023</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Subejo 4</td>
                <td>11111111</td>
                <td>42440007</td>
                <td>ejemplo@ejemplo.com</td>
                <td>01/01/2099</td>
                <td>Activo</td>
                <td>15/02/2023</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default Administrador;
