import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import socialmediaimg from '../assets/images/social-media.gif'
import "./navbar.css"
import gsap from 'gsap';
import { useEffect } from 'react';

function CollapsibleExample() {
  useEffect(()=>{
    gsap.fromTo("#navbar",
    { y: -100, opacity: 0 },  
    { y: 0, opacity: 1, duration: 2, ease: 'power1.out' }
    )
  },[])
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="/"><img src={socialmediaimg} className='socimg'></img></Navbar.Brand>
        <Navbar.Brand href="/">RADSYS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;