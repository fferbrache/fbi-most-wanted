import React from 'react';
import { Nav, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div>   
      <Card.Footer>
        <Nav variant="tabs" defaultActiveKey="#link" className="justify-content-center">
          <Nav.Item>
            <Link className="details-link" to="/contact">Contact</Link>
          </Nav.Item>
        </Nav>
      </Card.Footer>
    </div>
  );
};