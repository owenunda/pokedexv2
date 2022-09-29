import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "../assets/style/pokemonsCard.css"

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
  const [isPokemon, setIspokemons] = useState(false);
  
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .finally(() => setIspokemons(!isPokemon));
  }, []);



  //console.log(pokemon)
  // pokemon/?offset=0&limit=1155
  return (
    <div
      className="pokemons--card"
      onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
      {isPokemon ? (
        <div className="pokemon__info">
          <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
          <p> {pokemon.name} </p>
          
          <div className="typePoke__content">
            <p>type:</p>
            {
              pokemon.types.map(type => (
                <span key={type.slot} > {type.type.name }</span>
              ))
            }
          </div>
          <div className="pokeInfo" >
            <div> <p>weight: <span>{pokemon.weight} hg </span> </p></div>
            <div> <p>heigth: <span>{pokemon.height} dm </span> </p></div>
          </div>
        </div >
      ) : (
        <Loading />
      )}
    </div>
    );
};

export default PokemonCard;
