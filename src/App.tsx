import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";

import SearchComp from "./components/SearchComp";

function App() {
  return (
    <div className="App">
      <Container style={{ width: "100%", height: "100%" }}>
        <SearchComp />
      </Container>
    </div>
  );
}

export default App;
