import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
    
  }
`;

class NavigationBar extends Component {
    render() {
        return (
          <Styles>
          <Navbar expand="lg" bg="light text-danger">
              <Navbar.Brand href="/">
                  <img
                      src="https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80"
                      width="70"
                      height="70"
                      className="d-inline-block align-top"
                      alt="logo"
                  />
              </Navbar.Brand>
  
              <h1 class="font-weight-bold">RIDONC STORIES</h1>
  
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
  
              </Navbar.Collapse>
          </Navbar>
  
          <Navbar bg="danger" variant="dark">
  
              <Nav className="mr-auto">
  
                  {/* .navbar-expand .navbar-nav .nav-link {
      padding-right: 2rem;
      padding-left: 2rem;
  }     This is to spread out the links...do this code in css*/}
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/ShareStories">Share Stories</Nav.Link>
                  <Nav.Link href="/EditUpdateStories">Edit/Update Stories</Nav.Link>
  
                  <NavDropdown title="Categories" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Animals</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Work</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Pregnancy</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Driving</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Education</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
  
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                  </NavDropdown>
  
              </Nav>
              <Nav className="float-right">
                  <Nav.Item>
                      <Nav.Link>
                          <Link to="/">Log In</Link>
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link>
                          <Link to="/CardsMarket">Log out</Link>
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link>
                          <Link to="/">Sign up</Link>
                      </Nav.Link>
                  </Nav.Item>
  
              </Nav>
          </Navbar>
      </Styles >
        );
    }
}

export default NavigationBar;
