import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Router } from "@reach/router";

const buttonStyle = {
  marginLeft: "10px",
};

const pageStyle = {
  marginTop: "30px",
};

function App() {
  return (
    <div className="App">
      <div className="container" style={pageStyle}>
        <div className="form-group row">
          <div className="form-group col row">
            <label htmlFor="search" className="col-3">
              Search for:
            </label>
            <input type="text" class="form-control bg-light col-9"></input>
          </div>
          <div className="form-group col row">
            <label htmlFor="id" className="col-2">
              ID:
            </label>
            <input type="text" class="form-control bg-light col-7"></input>
            <button
              type="submit"
              className="btn btn-primary col-2"
              style={buttonStyle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
