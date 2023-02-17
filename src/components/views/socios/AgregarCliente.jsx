import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AgregarCliente = () => {
  return (
    <section className="bg-black">
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el nombre..." />
            <Form.Text className="text-warning">
              Ingrese correctamente los datos
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" placeholder="Numero de Documento" />
            <Form.Text className="text-warning">
              Ingrese correctamente los datos
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Celular</Form.Label>
            <Form.Control type="tel" placeholder="Ingrese numero de telefono" />
            <Form.Text className="text-warning">
              Ingrese correctamente los datos
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="mail" placeholder="Ingrese Mail..." />
            <Form.Text className="text-warning">
              Ingrese correctamente los datos
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              type="date"
              placeholder="Ingrese fecha de nacimiento"
            />
             <Form.Text className="text-warning">
              Ingrese correctamente los datos
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Fecha de Ingreso</Form.Label>
            <Form.Control type="date" placeholder="Fecha de pago" />
            <Form.Text className="text-warning">
              Ingrese correctamente los datos
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>
    </section>
  );
};

export default AgregarCliente;
