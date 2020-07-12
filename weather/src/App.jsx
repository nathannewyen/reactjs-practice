import React, { useState, useEffect } from "react";
import { Router, Link, navigate } from "@reach/router";
import axios from "axios";

const key = "1af62150d9d532b8dc93c112555e29dc";
const Dojo = (props) => {
  const [temp, setTemp] = useState(0);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}`
      )
      .then((res) => {
        setErrors(false);
        setTemp(Math.round(res.data.main.temp - 273.15));
      })
      .catch((err) => {
        console.log(err);
        setErrors(true);
      });
  }, [props.city]);

  return (
    <>
      {errors ? (
        <h1>These are not the location you looking for</h1>
      ) : (
        <h1>
          {props.city} - {temp}C
        </h1>
      )}
    </>
  );
};

function App() {
  const [q, setQ] = useState("");
  const getWeather = (e) => {
    e.preventDefault();
    navigate(`/dojo/${q}`);
  };
  return (
    <div className="App">
      <h1>Routing is cool</h1>

      <Router>
        <Dojo path="/dojo/:city" />
      </Router>
      <Link to="/dojo/Chicago"> Chicago </Link>
      <Link to="/dojo/London"> London </Link>
      <Link to="/dojo/Dallas"> Dallas </Link>

      <form onSubmit={getWeather}>
        <input type="text" onChange={(e) => setQ(e.target.value)} />
        <input type="submit" value="Get The Weather" />
      </form>
    </div>
  );
}

export default App;
