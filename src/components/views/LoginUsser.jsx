import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginUsser = () => {
  return (
    <section className="mainSection bg-black d-flex flex-column justify-content-center">
      <Container className=" text-white  p-2">
        <Form className="">
          <Form.Group  controlId="EmailUsser">
            <Form.Label>Email de Usuario</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su Email" />
            <Form.Text className="text-warning">
              Ingrese un Mail valido
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="ContraseñaUsser">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su Contraseña" />
          </Form.Group>

          <Button variant="outline-success" type="submit">
            LogIn
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default LoginUsser;
