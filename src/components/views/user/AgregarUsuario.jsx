import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AgregarUsuario = () => {
    return (
        <section className="bgGradient mainSection font">
       <Container className=" p-5 text-white">
         <Form  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="text" placeholder="Enter email" className="w-75" />
        <Form.Text className="text-warning">
          Ingrese los datos correctamente
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Enter email" className="w-75" />
        <Form.Text className="text-warning">
          Ingrese los datos correctamente
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rol</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="w-75" />
        <Form.Text className="text-warning">
          Ingrese los datos correctamente
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="w-75" />
        <Form.Text className="text-warning">
          Ingrese los datos correctamente
        </Form.Text>
      </Form.Group>

   
      <Button variant="outline-success" type="submit">
        Enviar
      </Button>
    </Form>
       </Container>
       </section>
    );
};

export default AgregarUsuario;