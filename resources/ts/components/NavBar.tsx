import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CounterProps } from "@/components/Counter";

interface NavBarProps {}

interface NavBarState {}

class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
    }

    visitHome() {
        Inertia.visit("home");
    }

    visitPosts() {
        Inertia.visit("posts");
    }

    visitCounter() {
        Inertia.visit("counter", {
            data: {
                initialCount: 0,
            } as CounterProps,
        });
    }

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand onClick={() => this.visitHome()}>
                        Blog
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => this.visitHome()}>
                                Inicio
                            </Nav.Link>
                            <Nav.Link onClick={() => this.visitPosts()}>
                                Publicaciones
                            </Nav.Link>
                            <Nav.Link onClick={() => this.visitCounter()}>
                                Contador
                            </Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <Row>
                                <Col>
                                    <FormControl
                                        type="text"
                                        placeholder="Search"
                                        className="mr-sm-2"
                                    />
                                </Col>
                                <Col>
                                    <Button variant="outline-success">
                                        Search
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default NavBar;
