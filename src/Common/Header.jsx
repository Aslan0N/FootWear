import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";

const Header = () => {
  const {totalUniqueItems} = useCart()
  return (
    <>
      <header>
        <div className="header-top">
          <h1>Footwear</h1>
          <form>
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-search"></i>
          </form>
        </div>
        <div className="header-bottom">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <LinkContainer to={"/"}>
                    <Nav.Link href="#home" className="hv">Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/men"}>
                    <Nav.Link href="#link" className="hv">Men</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/women"}>
                    <Nav.Link href="#link" className="hv">Women</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/about"}>
                    <Nav.Link href="#link" className="hv">About</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/contact"}>
                    <Nav.Link href="#link" className="hv">Contact</Nav.Link>
                  </LinkContainer>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <LinkContainer to={"/cart"}>
              <Nav.Link href="#link" className="hv shop-card">
              <i class="fa-solid fa-cart-shopping"></i>
              Basket (<small>{totalUniqueItems}</small>)
              </Nav.Link>
          </LinkContainer>
          {/* <div className="shop-card">
          
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
