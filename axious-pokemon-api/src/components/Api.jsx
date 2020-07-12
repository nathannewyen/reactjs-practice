import React,{ useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';



const PokemonAPI = props => {
    // Get API
    const [responseData, setResponseData] = useState(null);
    const buttonAPI = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
        .then(res=>{setResponseData(res.data)})
        .catch((err) => {
          console.log(err);
        });
    }; 


    return(
        <div>
            <button className="btn btn-primary" onClick={buttonAPI}>
                Get Pokemon
            </button>
        {responseData?.results.map((pokemon, i) => {
                return <p key={i}>{i + 1} {pokemon.name}</p>
                })
        }
    </div>
    )
}

export default PokemonAPI;