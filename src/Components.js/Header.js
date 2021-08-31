import React, { Component } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#Home">Coffee Shop</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to ='/'>Home</Link>
                            <Link to="/Favourie">Favourie List</Link>
                        
                        </Nav>
                    </Container>
                </Navbar>

            </div>
        )
    }
}

export default Header
