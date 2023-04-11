import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const AdminMaster = () => {
  return (
    <section className="mainSection bgGradient">
      <Container className="text-center text-white">
        <h2>Administrador de Usuarios</h2>
        <hr />
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nombre y Apellido</th>
                <th>Usuario</th>
                <th>Contraseña</th>
                <th>Modificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Juan Carlos</td>
                <td>Juan61</td>
                <td>uservalid</td>
                <td> <Button variant="danger" className="m-1" size="sm" >
            <i className="bi bi-bookmark-x-fill  text-white-50"></i>
          </Button>
          <Button  className="m-1 btn btn-warning btn-sm" >
            <i className="bi bi-pencil-square text-white-50"></i>
          </Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default AdminMaster;
