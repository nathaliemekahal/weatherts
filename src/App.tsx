import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SearchComp from "./components/SearchComp";

function App() {
  return (
    <div className="App">
      <Router>
        <Container style={{ width: "100%", height: "100%" }}>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={SearchComp} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
