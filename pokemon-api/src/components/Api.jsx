import React, { useState } from "react";

const GetAPI = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const buttonAPI = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
      .then((res) => res.json())
      .then((res) => setPokemons(res.results))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={buttonAPI}>
        Get Pokemon
      </button>
      <div className="d-flex flex-wrap">
        {pokemons.map((pokemon, i) => {
          return (
            <p key={i} className="bg-info">
              {i + 1} {pokemon.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default GetAPI;
