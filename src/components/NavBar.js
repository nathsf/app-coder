import React from "react";
import {
    Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">E-COMMERCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">
                <Link to="/" className="text-white">Home</Link>
            </Nav.Link>
            <Nav.Link href="">
                <Link to="/products" className="text-white">Catálogo</Link>
            </Nav.Link>
            
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item to="/products/electronics">
                <Link to="/products/electronics" className="text-gray">electronics</Link>
              </NavDropdown.Item>
              <NavDropdown.Item to="/products/jewelery">
              <Link to="/products/jewelery/" className="text-gray">jewelery</Link>
              </NavDropdown.Item>
              <NavDropdown.Item to="/products/men's%20clothing" >
              <Link to="/products/men's%20clothing/" className="text-gray">men's clothing</Link>
              </NavDropdown.Item>
              <NavDropdown.Item to="/products/women's%20clothing">
              <Link to="/products/women's%20clothing/" className="text-gray">women's clothing</Link>
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Nav>
          <Nav.Link >
            <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
    </>
    
  );
}


