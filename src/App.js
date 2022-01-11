import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Jumbotron,
} from "react-bootstrap";
import { useState } from "react";

function App() {
  let [shoes, shoes변경] = useState([]);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="jumbotron background">
        <h1 class="display-4">20% Season Off</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
            <h4>상품명</h4>
            <h4>상품설명 & 가격 </h4>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="100%"
            />
            <h4>상품명</h4>
            <h4>상품설명 & 가격 </h4>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="100%"
            />
            <h4>상품명</h4>
            <h4>상품설명 & 가격 </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
