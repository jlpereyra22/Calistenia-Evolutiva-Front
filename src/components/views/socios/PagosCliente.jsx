import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const PagosCliente = () => {
  return (
    <section className="bgGradient mainSection">
      <Container className="text-white">
        <div>
          <h2 className="text-center">Abono Mensual</h2>
          <hr />
          <Form className="w-50 p-3">
            <Form.Group className="mb-3" controlId="inputDni">
              <Form.Label>Ingrese DNI</Form.Label>
              <Form.Control type="number" placeholder="Ingrese un Dni...." />
              <Form.Text className="text-warning">
                Ingrese un dni valido
              </Form.Text>
            </Form.Group>

            <Button variant="outline-success" type="button">
              Buscar
            </Button>
          </Form>
        </div>
        <div className="d-flex justify-content-center">
          <Card style={{ width: "50rem" }} className="bgGradient my-5">
            <Card.Body>
              <Card.Title>Apellido y Nombre: Armas Francisco</Card.Title>
              <Card.Subtitle className="m-3 text-white">
                DNI:123456789
              </Card.Subtitle>
              <Card.Subtitle className="m-3 text-white">
                Cel:381459789
              </Card.Subtitle>
              <Card.Subtitle className="m-3 text-white">
                Mail:ejemplo@otroejemplo.com
              </Card.Subtitle>
              <Card.Subtitle className="m-3 text-white">
                Fecha Nacimiento:01/06/1990
              </Card.Subtitle>
              <Card.Subtitle className="m-3 text-white">
                Estado:Activo
              </Card.Subtitle>
              <Card.Subtitle className="m-3 text-white">
                Ultimo Pago:06/03/2023
              </Card.Subtitle>
              <div className="text-end">
              <Link  className="m-3 btn btn-outline-success" size="lg" to="/administrar/editarcliente/:id">
            Pagar
          </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default PagosCliente;
