import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Loading from "./Loading";

const Pokedex = () => {
  const userName = useSelector((state) => state.userName);
  const [namePokemon, setNamePokemon] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [typePokemons, setTypePokemons] = useState([]);
  const [isPokemon, setIspokemons] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155`)
      .then((res) => setPokemons(res.data.results))
      .finally(() => setIspokemons(!isPokemon))
      .catch((error) => console.log(error));

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypePokemons(res.data.results));
  }, []);
  // buscar por nombre
  const searchPokemon = () => {
    navigate(`/pokedex/${namePokemon.toLowerCase()}`);
  };
  // buscar por type
  const searchType = (typeUrl) => {
    axios.get(typeUrl).then((res) => setPokemons(res.data.pokemon));
  };
  // === paginacion ==== //
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 12;
  const lastPokemonsPage = page * pokemonsPerPage; // 5
  const fistPokemonsPage = lastPokemonsPage - pokemonsPerPage; // 0
  const PokemonsPaginacion = pokemons.slice(fistPokemonsPage, lastPokemonsPage);

  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
// ==================================================================




  return (
    <div className="pokedexContainer">
      <nav className="container__img--pokedex">
        <img
          className="img__pokedex--pokedex"
          src="./src/assets/imgs/image11.png"
          alt="pokedexImg"
        />
        <div className="nav__black--pokedex"></div>
      </nav>
      <div className="pokedex__content">
        <p className="welcome__text">
          <strong>Welcome {userName},</strong> here you can find your favorite
          pokemons.{" "}
        </p>

        <div className="inputs__content">
          <form className="form__search" onSubmit={searchPokemon}>
            <input
              type="text"
              value={namePokemon}
              onChange={(e) => setNamePokemon(e.target.value)}
              placeholder="Search by name or id (lower case) "
            />
            <button> search </button>
          </form>
          <select
            className="select__form"
            onChange={(e) => searchType(e.target.value)}>
            {typePokemons?.map((typePokemon) => (
              <option key={typePokemon.url} value={typePokemon.url}>
                {typePokemon.name}
              </option>
            ))}
          </select>
        </div>

        <div className="pokemons__container">
          <div className="pokemos__cards">
            {isPokemon ? (
              PokemonsPaginacion?.map((pokemon) => (
                <PokemonCard
                  key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                  url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>

        <div className="pagePokemons">
        <button className="btn btn-prev" onClick={() => setPage(page - 1)} disabled={page === 1}>
        <i className="fa-solid fa-caret-left"></i>
        </button>
        <p>
          <input  type="number" value={page} onChange={e => setPage(e.target.value) } /> / {totalPages}
        </p>
        <button className="btn btn-next" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        <i className="fa-solid fa-caret-right"></i>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
