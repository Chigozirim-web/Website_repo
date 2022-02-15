import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const App = () => {
    return (
        <React.Fragment>
        <BrowserRouter>
            <MyNav />
            <br /> <br />
            <div className="container-fluid">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" exact element={<About />} />
                    <Route path="/portfolio" exact element={<Portfolio />} />
                </Routes>
            </div>
        </BrowserRouter>
        <br /> <br /> <br />
        <Footer />
      </React.Fragment>
    )
};

const MyNav = () => {
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container >
                <Link className="navbar-brand" to="/">Welcome</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default App;