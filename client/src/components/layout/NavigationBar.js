import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logo from "../../assets/images/logo.png"


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
                            src={logo}
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>

                    <h1 className="font-weight-bold">RIDONK STORIES</h1>

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
                        <Nav.Link href="/ViewStories">View Stories</Nav.Link>

                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.01">Animals</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.02">Baby/Kids</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.03">Coding</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.04">Drinking</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.05">Driving</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.06">Education</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.07">In-Laws</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.08">Pregnancy</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.09">Sports</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.10">Vacation</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.11">Word</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.00">Others</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Nav className="float-right">
                        <Nav.Item>
                            <Nav.Link href="/login">Log In</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link href="/register">Sign up</Nav.Link>

                        </Nav.Item>

                    </Nav>
                </Navbar>
            </Styles >
        );
    }
}

export default NavigationBar;
