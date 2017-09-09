import React, { Component } from "react";
import { Grid, Jumbotron, Button } from "react-bootstrap";
import "./App.css";
import SNavbar from "./navbar/SNavbar.js";

class App extends Component {
  render() {
    return (
      <div>
        <SNavbar />
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank"
              >
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
