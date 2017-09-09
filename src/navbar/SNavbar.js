import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import logo from "./solera_logo_80x80_green.png";
import "./SNavbar.css";

class SNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img className="Nav-logo" src={logo} alt="Logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              href="https://www.clasesdeequitacionmadrid.com/instalaciones-hipica"
            >
              Instalaciones
            </NavItem>
            <NavItem
              eventKey={2}
              href="https://www.clasesdeequitacionmadrid.com/clases-de-equitacion"
            >
              Clases
            </NavItem>
            <NavItem
              eventKey={2}
              href="https://www.clasesdeequitacionmadrid.com/pupilaje"
            >
              Pupilaje
            </NavItem>
            <NavDropdown
              eventKey={3}
              title="Actividades"
              id="basic-nav-dropdown"
            >
              <MenuItem
                eventKey={3.1}
                xlinkHref="https://www.clasesdeequitacionmadrid.com/cumpleanos-con-caballos"
              >
                Cumpleaños
              </MenuItem>
              <MenuItem
                eventKey={3.2}
                xlinkHref="https://www.clasesdeequitacionmadrid.com/cumpleanos-con-caballos"
              >
                Campamentos
              </MenuItem>
            </NavDropdown>
            <NavItem
              eventKey={1}
              href="https://www.clasesdeequitacionmadrid.com/blog"
            >
              Blog
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SNavbar;
