import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
// Styling
const buttonStyle = {
  marginLeft: "10px",
};

const pageStyle = {
  marginTop: "30px",
};

const Form = (props) => {
  const [search, setSearch] = useState("people");
  const [searchID, setSearchID] = useState(1);

  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    buttonAPI();
    props.setSearch(props.type);
  });

  const buttonAPI = () => {
    axios
      .get(`https://swapi.dev/api/${props.type}/`)
      .then((res) => {
        setResponseData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/${search}/${searchID}`);
  };

  return (
    <div className="container" style={pageStyle}>
      <form onSubmit={onSubmit}>
        <div className="form-group row">
          <div className="form-group col row align-items-center">
            <label htmlFor="search" className="col-3">
              Search for:
            </label>
            <select
              className="custom-select bg-light col-8"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            >
              <option defaultValue value="people">
                People
              </option>
              <option value="planet">Planet</option>
            </select>
          </div>
          <div className="form-group col row align-items-center">
            <label htmlFor="id" className="col-1">
              ID:
            </label>
            <input
              type="number"
              className="form-control bg-light col-2"
              name="searchID"
              value={searchID}
              onChange={(e) => setSearchID(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary col-2"
              style={buttonStyle}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
