import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormIngresoCaja = () => {
  return (
    <section className="mainSection bgGradient">
      <Container>
        <div className="text-center text-white">
            <h2>Asiento Diario</h2>
            <hr />
        </div>
        <div>
        <Form className="text-white">
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Nombre" />
            <Form.Text className="text-warning">
              Ingrese los datos correctamente
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formOperacion">
            <Form.Label>Tipo de Operacion</Form.Label>
            <Form.Select id="formOperacion">
              <option>Tipo de Gestion</option>
              <option>Ingreso</option>
              <option>Egreso</option>
            </Form.Select>
            <Form.Text className="text-warning">
              Ingrese los datos correctamente
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMonto">
            <Form.Label>Monto</Form.Label>
            <Form.Control type="number" placeholder="ingrese el Monto" />
            <Form.Text className="text-warning">
              Ingrese los datos correctamente
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" placeholder="Fecha" />
            <Form.Text className="text-warning">
              Ingrese los datos correctamente
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formHora">
            <Form.Label>Hora</Form.Label>
            <Form.Control type="time" placeholder="Ingrese la hora" />
            <Form.Text className="text-warning">
              Ingrese los datos correctamente
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formOperador">
            <Form.Label>Operador</Form.Label>
            <Form.Control type="text" placeholder="Nombre del Operador" />
            <Form.Text className="text-warning">
              Ingrese los datos correctamente
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
      </Container>
    </section>
  );
};

export default FormIngresoCaja;
