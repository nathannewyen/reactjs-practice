import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Router, navigate, Link } from "@reach/router";

const Info = (props) => {
  const [homeWorld, setHomeWorld] = useState("...");
  const [planetId, setPlanetId] = useState();
  const [response, setResponse] = useState({});
  useEffect(() => {
    fetchData();
    props.setSearch(props.type); // eslint-disable-next-line
    props.setSearchID(props.id); // eslint-disable-next-line
  }, [props.type, props.id]);

  const fetchData = () => {
    axios
      .get(`https://swapi.dev/api/${props.type}/${props.id}/`)
      .then((res) => {
        setHomeWorld(null);
        setResponse(res.data);
        if (res.data.homeworld !== undefined) {
          setPlanetId(res.data.homeworld.split("/")[5]);
          axios
            .get(res.data.homeworld)
            .then((resp) => setHomeWorld(resp.data.name));
        }
      })
      .catch((err) => {
        navigate(`/404`);
      });
  };

  return (
    <div>
      {props.type === "people" ? (
        <div>
          <h1>{response.name}</h1>
          <p>Height: {response.name}</p>
          <p>Hair color: {response.hair_color}</p>
          <p>Eye color: {response.eye_color}</p>
          <p>Skin color: {response.skin_color}</p>
          <p>
            Home World:
            {homeWorld === null ? (
              "......"
            ) : (
              <Link to={`/planets/${planetId}`}>{homeWorld}</Link>
            )}
          </p>
          {/* <Link to="/">Back to Home</Link> */}
        </div>
      ) : props.type === "planets" ? (
        <div>
          <h1>{response.name}</h1>
          <p>Climate: {response.name}</p>
          <p>Terrain: {response.climate}</p>
          <p>Surface Water: {response.surface_water}</p>
          <p>Population: {response.surface_water}</p>
          {/* <Link to="/">Back to Home</Link> */}
        </div>
      ) : (
        <div>
          <h1>{response.name}</h1>
          <p>Model: {response.model}</p>
          <p>Manufacturer: {response.manufacturer}</p>
          <p>Passengers: {response.passengers}</p>
          <p>Length: {response.length}</p>
        </div>
      )}
    </div>
  );
};

const NotFound = (props) => {
  return (
    <div>
      <h1>404. Not Found</h1>
    </div>
  );
};

function App() {
  const [search, setSearch] = useState("people");
  const [searchID, setSearchID] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/${search}/${searchID}`);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <form className="form-inline" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="sf">Search for: </label>
                <select
                  className="form-control"
                  name=""
                  id="sf"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                >
                  <option value="people">People</option>
                  <option value="planets">Planet</option>
                  <option value="starships">Starships</option>
                </select>
              </div>
              &nbsp; &nbsp;
              <div className="form-group">
                <label htmlFor="id">ID: </label>
                <input
                  type="number"
                  name=""
                  id="id"
                  onChange={(e) => setSearchID(e.target.value)}
                  value={searchID}
                  className="form-control"
                  placeholder="id"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div style={{ margin: "20px" }}>
        <Router>
          <Info
            path="/:type/:id"
            setSearch={setSearch}
            setSearchID={setSearchID}
          />
          <NotFound path="/404" />
        </Router>
      </div>
    </div>
  );
}

export default App;
