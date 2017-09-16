import React, { Component } from "react";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./SNavbar.css";

class SNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img className="Nav-logo" src={this.props.logo} alt="Logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {this.props.items ? (
            <Nav pullRight>
              {this.props.items.map(
                item =>
                  item.link ? (
                    <NavItem key={item.text} eventKey={1} href={item.link}>
                      {item.text}
                    </NavItem>
                  ) : (
                    <NavDropdown
                      eventKey={3}
                      key={item.text}
                      title={item.text}
                      id="basic-nav-dropdown"
                    >
                      {item.items.map(innerItem => (
                        <MenuItem
                          key={innerItem.text}
                          eventKey={1}
                          href={innerItem.link}
                        >
                          {innerItem.text}
                        </MenuItem>
                      ))}
                    </NavDropdown>
                  )
              )}
            </Nav>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SNavbar;
