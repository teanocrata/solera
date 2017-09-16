import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./SNavbar.css";

class SNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img className="Nav-logo" src={this.props.logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {this.props.routes ? (
            <Nav pullRight>
              {this.props.routes.map(item => (
                <LinkContainer key={item.name} to={item.path}>
                  <NavItem>{item.name}</NavItem>
                </LinkContainer>
              ))}
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SNavbar;
