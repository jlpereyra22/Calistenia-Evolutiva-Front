import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import icono from "../img/icono.jpeg";


const Menu = () => {
  return (
    <section className="bg-black">
      <Container className="p-3">
        <Navbar
          bg="black"
          expand="lg"
          variant="dark"
          className="row justify-content-between m-0 p-0"
        >
          <Col lg={5} className="text-lg-start text-center">
            <Navbar.Brand as={Link} to="/">
              <img src={icono} alt="icono" className="w-25 m-0 p-0" />
            </Navbar.Brand>
          </Col>
          <Col lg={5}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
               <NavLink className="btn text-light" to="/pagos">Pagos</NavLink>
               <NavLink className="btn text-light" to="/administrar">Administrar</NavLink>
               <NavLink className="btn text-light" to="/loginUser">Login</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Navbar>
      </Container>
    </section>
  );
};

export default Menu;
