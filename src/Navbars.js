/* eslint-disable */
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Jumbotron } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function Navbars() {
    return(
      <Navbar bg="light" expand="lg" className="">
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail/2">Detail</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

export default Navbars;