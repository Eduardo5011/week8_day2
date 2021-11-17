import React, { Component } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Pokemon</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link"></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
                
            </div>
        )
    }
}
