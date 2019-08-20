import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../assets/images/logo.png";
import "./NavigationBar.css";



class NavigationBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: []
        }

    }

    componentDidMount() {
        fetch("/api/story").then(res => res.json()).then(data => {
            data.forEach(ele => {
                if (this.state.category.indexOf(ele.category) === -1 && ele.category !== "Other") {
                    return this.setState({ category: [...this.state.category, ele.category] })
                }
            })
        })
        console.log(this.state.category)
    }



    render() {
        return (
            <div>

                

            
                
                <Navbar>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                        />
                        {' RIDONK STORIES'}

                    </Navbar.Brand>
                </Navbar>

                <Navbar bg="light text-dark" expand="lg">
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse bg ="light" id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/ShareStories">Share Stories</Nav.Link>
                            <Nav.Link href="/ViewStories">View Stories</Nav.Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {this.state.category.map(ele => {
                                
                                var link = "/ViewStories/" + ele;
                                return <NavDropdown.Item href={link}>{ele}</NavDropdown.Item>
                            })}

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/ViewStories/Other">Other</NavDropdown.Item>
                        </NavDropdown>

                        <Nav className="leftFloat">
                                <Nav.Item>
                                    <Nav.Link href="/login">Log In</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>

                                    <Nav.Link href="/register">Sign up</Nav.Link>

                                </Nav.Item>

                        </Nav>
                            

                        </Nav>
                        
                    </Navbar.Collapse>

                    
                </Navbar>

                {/* <Navbar expand="lg" bg="danger text-dark">


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

                </Navbar> */}
{/* 
                <Navbar bg="light" variant="dark">

                    <Nav className="mr-auto">


                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/ShareStories">Share Stories</Nav.Link>
                        <Nav.Link href="/ViewStories">View Stories</Nav.Link>

                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {this.state.category.map(ele => {
                                console.log(ele);
                                var link = "/ViewStories/" + ele;
                                return <NavDropdown.Item href={link}>{ele}</NavDropdown.Item>
                            })}

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
                </Navbar> */}
            </div >
        );
    }
}

export default NavigationBar;
