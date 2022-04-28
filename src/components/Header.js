import React from "react";
import {Col, Container, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import '../bootstrap.min.css'

function Header() {
    return (
        <header>
            <Navbar className="navbar navbar-dark bg-primary text-center">
                <Container>
                    <Col>
                        <LinkContainer to="/">
                            <Navbar.Brand className="navbar-brand" href="/">
                                Chaz
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    </Col>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
