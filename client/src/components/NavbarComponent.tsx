import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () =>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container className="w-100 m-auto d-flex justify-content-start">
          <Navbar.Brand href="#home">Media Center</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent