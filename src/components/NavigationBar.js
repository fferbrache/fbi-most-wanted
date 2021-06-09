import React from 'react';
import { Navbar, Form, Button, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">FBI</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/mostwanted">Most Wanted</Link>
      <Link to="/terrorism">Terrorism</Link>
    </Nav>
    <Form inline>
      <Link to="/tips">
      <Button variant="outline-info">FBI Tipline</Button>
      </Link>
    </Form>
      </Navbar>
    </div>
  )
}