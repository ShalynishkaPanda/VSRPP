import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import store from '../store/index';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tables extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    logout = () => {
        const navigate = useNavigate();
        navigate("/");
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }

    render() {
        const { characters } = this.state;

        return (
            <>
                <Navbar bg="dark" expand="lg" variant='dark'>
                    <Container>
                        <Navbar.Brand href="/">React-Tutorial</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="me-auto">
                            <Nav.Link href="/user">Home</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav.Link href='/' onClick={function () {
                                    store.dispatch({ type: "logOut" })
                                }}>Logout</Nav.Link>
                            </Navbar.Collapse>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="container">
                    <h3>Add new User</h3>
                    <Form handleSubmit={this.handleSubmit} />
                    <h4>Users</h4>
                    <Table
                        characterData={characters}
                        removeCharacter={this.removeCharacter}
                    />
                </div>
            </>
        );
    }
}

export default Tables;