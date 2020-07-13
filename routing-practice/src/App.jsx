import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import Home from "./components/Home";

const Number = (props) => {
  return (
    <>
      {isNaN(props.value) ? (
        <h1>The word is: {props.value} </h1>
      ) : (
        <h1>The number is: {props.value}</h1>
      )}
    </>
  );
};

const Color = (props) => {
  return (
    <div style={{ backgroundColor: props.color1, color: props.color2 }}>
      {props.value}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Number path="/:value" />
        <Color path="/:value/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
