/* eslint-disable */
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
import React, { useState } from "react";
import Data from "./data.js";
import { Link, Route, Switch, useHistory, useParams } from "react-router-dom";
import Detail from "./Detail.js";
import axios from "axios";

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [left, left변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Route exact path={"/"}>
        <Navbars />
        <Jumbo />
        <div className="container">
          <div className="row">
            {shoes.map((a, i) => {
              return <Card shoes={shoes[i]} i={i} key={i} />;
            })}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              axios
                .get(" https://codingapple1.github.io/shop/data2.json")
                .then(result => {
                  console.log(result.data);
                  shoes변경([...shoes, ...result.data]);
                })
                .catch(() => {
                  console.log("fail");
                });
            }}
          >
            더보기
          </button>
        </div>
      </Route>

      <Route path={"/detail/:id"}>
        <Navbars />
        <Detail shoes={shoes} left={left} />
      </Route>
    </div>
  );
}

function Navbars() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail">
              Detail
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Jumbo() {
  return (
    <div className="jumbotron background">
      <h1 className="display-4">20% Season Off</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>

      <a className="btn btn-primary btn-lg" href="#" role="button">
        Learn more
      </a>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <h4>
        {props.shoes.content} & {props.shoes.price}
      </h4>
    </div>
  );
}

export default App;
