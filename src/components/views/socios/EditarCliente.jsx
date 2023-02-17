import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const EditarCliente = () => {
    return (
        <section className="bg-black">
        <Container>
          <div className="text-center text-white">
            <h2 >Modificar Cliente </h2>
            <hr />
          </div>
        <div>
          <Form className="text-white">
            <Form.Group className="mb-3" controlId="inputNombre">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el nombre..." />
              <Form.Text className="text-warning">
                Ingrese correctamente los datos
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="inputDni">
              <Form.Label>DNI</Form.Label>
              <Form.Control type="number" placeholder="Numero de Documento" />
              <Form.Text className="text-warning">
                Ingrese correctamente los datos
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="inputCel">
              <Form.Label>Celular</Form.Label>
              <Form.Control type="tel" placeholder="Ingrese numero de telefono" />
              <Form.Text className="text-warning">
                Ingrese correctamente los datos
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="inputEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="mail" placeholder="Ingrese Mail..." />
              <Form.Text className="text-warning">
                Ingrese correctamente los datos
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="inputFechaN">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ingrese fecha de nacimiento"
              />
               <Form.Text className="text-warning">
                Ingrese correctamente los datos
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="inputMembresia">
              <Form.Label>Estado de Membresia</Form.Label>
              <Form.Select aria-label="Estado de Membresia">
                <option>Estado</option>
                <option value="1">Activo</option>
                <option value="2">Baja</option>
              </Form.Select>
              <Form.Text className="text-warning">
                Ingrese correctamente los datos
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="inputFechaIngreso">
              <Form.Label>Fecha de Ingreso</Form.Label>
              <Form.Control type="date" placeholder="Fecha de pago" />
              <Form.Text className="text-warning">
                Ingrese correctamente los datos
              </Form.Text>
            </Form.Group>
          </Form>
          </div>
        </Container>
      </section>
    );
};

export default EditarCliente;