import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import icono from "../img/icono.jpeg";
import Button from "react-bootstrap/Button";

const Menu = (props) => {
  const navegacion = useNavigate();
  const logout = () => {
    localStorage.removeItem("tokenUsuario");
    props.setUsuarioLogueado({});
    navegacion("/");
  };
  return (
    <section className="bg-black font">
      <Container className="p-3">
        <Navbar
          bg="black"
          expand="lg"
          variant="dark"
          className="row justify-content-between m-0 p-0"
        >
          <Col lg={4} className="text-lg-start text-center">
            <Navbar.Brand as={Link} to="/">
              <img src={icono} alt="icono" className="w-25 m-0 p-0" />
            </Navbar.Brand>
          </Col>
          <Col lg={6}>
            {props.UsuarioLogueado.Usuario ? (
              <>
                <NavLink className="btn text-light m-1" to="/administrar">
                  Administrar
                </NavLink>
                <NavLink className="btn text-light m-1" to="administrar/caja">
                  Caja Diaria
                </NavLink>
                <NavLink className="btn text link-light m-1 " to="/adminMaster">
                Admin Maestro
              </NavLink>
                <Button variant="outline-danger" className="m-1" onClick={logout}>
                  LogOut
                </Button>
              </>
            ) : (
              <NavLink className="btn btn-outline-success " to="/loginUser">
                Login
              </NavLink>
            )}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
            </Navbar.Collapse>
          </Col>
        </Navbar>
      </Container>
    </section>
  );
};

export default Menu;
