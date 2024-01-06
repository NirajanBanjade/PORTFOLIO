import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Bootnav() {
    const styleboot={
        padding : '10px',
        position:'absolute',
        top:'0',
        left:'0'


    }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={styleboot}>
      <Container>
        <Navbar.Brand href="#home">About Me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Education</Nav.Link>
            <Nav.Link href="#link">Experience</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bootnav;