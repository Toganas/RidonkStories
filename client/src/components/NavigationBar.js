import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
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

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" bg="secondary text-white">
            <Navbar.Brand href="/">
                <img
                    src="https://cdn.pixabay.com/photo/2016/06/15/16/56/magic-1459371_1280.png"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand>

            <h1 class="font-weight-bold">Graveholdsinn</h1>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
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
                            <Link to="/CardsMarket">Sign up</Link>
                        </Nav.Link>
                    </Nav.Item>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Navbar bg="dark" variant="dark">
    
    <Nav className="mr-auto">

        {/* .navbar-expand .navbar-nav .nav-link {
    padding-right: 2rem;
    padding-left: 2rem;
}     This is to spread out the links...do this code in css*/}
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/CardsMarket">Cards</Nav.Link>
      <Nav.Link href="/CreateMarket">Create Market</Nav.Link>
      <Nav.Link href="/CardsMarket">Saved Markets</Nav.Link>
      <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
    </Nav>
   
    </Navbar>
    </Styles >
)
