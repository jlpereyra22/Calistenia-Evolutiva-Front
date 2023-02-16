import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="bg-dark text-light">
      <Container className="text-center p-2">
        <section className="d-flex justify-content-evenly my-4 text-white-50">
          <div>
            <p>&copy; Todos los derechos reservados</p>
          </div>
          <div>
            <h5>CALISTENIA EVOLUTIVA <br />TUCUMAN</h5>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Footer;
