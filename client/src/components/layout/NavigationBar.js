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
                            <NavDropdown.Item href="/ViewStories/Animals">Animals</NavDropdown.Item>
                            <NavDropdown.Item href="/ViewStories/Children">Children</NavDropdown.Item>
                            <NavDropdown.Item href="/ViewStories/Coding">Coding</NavDropdown.Item>
                            <NavDropdown.Item href="/ViewStories/Drinking">Drinking</NavDropdown.Item>
                            <NavDropdown.Item href="/ViewStories/Driving">Driving</NavDropdown.Item>
                            <NavDropdown.Item href="/ViewStories/Education">Education</NavDropdown.Item>
                            <NavDropdown.Item href="/ViewStories/In-Laws">In-Laws</NavDropdown.Item>
                            <NavDropdown.Item href="/ViewStories/Pregnancy">Pregnancy</NavDropdown.Item>
                            <NavDropdown.Item href="/ViewStories/Sports">Sports</NavDropdown.Item>
                            <NavDropdown.Item href="/ViewStories/Vacation">Vacation</NavDropdown.Item>
                            <NavDropdown.Item href="/ViewStories/Work">Work</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/ViewStories/Other">Other</NavDropdown.Item>
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
