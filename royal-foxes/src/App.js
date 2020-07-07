import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fox from "./Components/Fox";

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Hello world</h1>
      </div>
      <div className="row">
        <Fox name="Mr. Fox" rank={5} furColor="red" />
        <Fox name="Mr. Nhan" rank={3} furColor="green" />
        <Fox name="Mr. Nick" rank={1} furColor="blue" />
        <Fox name="Mr. Dav" rank={6} furColor="purple" />
      </div>
    </div>
  );
}

export default App;
