import React from 'react';
import { Navbar, Form, Button, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/fbi-most-wanted">FBI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className='navBarLink' to="/contact">Locations</Link>
            <NavDropdown title="Most Wanted" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/mostwanted" key="1">Top Ten Most Wanted</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/terrorism" key="2">Terrorism</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kidnappings" key="3">Kidnappings/Missing Persons</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Link to="/tips">
              <Button variant="dark">Tips</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}