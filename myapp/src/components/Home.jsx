import React from "react";
import { Navbar, Nav, Form, Button,Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; 
import image from './irctclogo2.png';


function Home() {
  return (
    
    <Navbar bg="body-tertiary" variant="dark">
      <Navbar.Brand as={Link} to="/" style={{ color: "black", marginLeft: "40px", display: "flex", alignItems: "center" }}>
        <Image
          src={image}
          alt="Logo"
          style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }}
        />
        IRCTC
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" style={{color:"black", marginLeft:"80px"}}>Home</Nav.Link>
        <Nav.Link as={Link} to="/login" style={{color:"black", marginLeft:"60px"}}>Login</Nav.Link>
        <Nav.Link as={Link} to="/register" style={{color:"black", marginLeft:"60px"}}>Register</Nav.Link>
        <Nav.Link as={Link} to="/contact" style={{color:"black", marginLeft:"60px"}}>Contact Us</Nav.Link>
        <Nav.Link as={Link} to="/listuser" style={{color:"black", marginLeft:"60px"}}>List Users</Nav.Link>
      </Nav>
      <Form inline className="justify-content-end">
        <Button variant="outline-secondary" size="sm" style={{ marginLeft:"60px"}}>Smaller Button</Button>
      </Form>
    </Navbar>
    
  );
}

export default Home;
