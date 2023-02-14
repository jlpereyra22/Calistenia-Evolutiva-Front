import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Menu = () => {
    return (
        <section className='bg-dark'>
      <Container  className='p-3'>
        <Navbar bg="dark" expand="lg" variant="dark" className="row justify-content-between m-0 p-0">
        <Col lg={5} className="text-lg-start text-center">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Col>
        <Col lg={5}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
        </Col>
    </Navbar>
      </Container>
      </section>
    );
};

export default Menu;