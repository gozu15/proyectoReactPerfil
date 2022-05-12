import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './NavBar.css'
export function NavBar() {
  return (
    <>
     <div className="header-loginphone">
          <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <div className="text-phone">+56 9884894449</div>
                        </div>
                        <div className="col-6">
                            <div className="login-btn">
                                <a href="#">Login</a> {'|'}
                                <a href="#">Create account</a>
                            </div>
                            
                        </div>                        
                    </div>
                </div>
          </div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-principal">         
        <Container>           
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="menu-buttons">
              <Nav.Link href="#features">Inicio</Nav.Link>
              <Nav.Link href="#pricing">Acerca de mi</Nav.Link>              
              <NavDropdown title="Menus" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
