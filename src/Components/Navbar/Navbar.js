import React from "react";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = ({ NavM }) => {
  return (
    <Navbar collapseOnSelect expand="lg">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">{NavM}</Navbar.Collapse>
    </Navbar>
  );
};
