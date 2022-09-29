import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/style/btn.css"
const PokemonDetail = () => {

   const { id } = useParams();
   const navigate = useNavigate();
   const [pokemon, setPokemon] = useState({});
   //const [locationPoke, setLocationPoke] = useState([])

   useEffect(() => {
      axios
         .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
         .then((res) => setPokemon(res.data));
   }, []);
   //console.log(locationPoke);
   // console.log(pokemon)
   return (
      <div className="pokemom__detai">
         <header>
            <nav className="container__img--pokedex">
               <img
                  className="img__pokedex--pokedex"
                  src="./src/assets/imgs/image11.png"
                  alt="pokedexImg"
               />
               <div className="nav__black--pokedex"></div>
            </nav>
         </header>
         <section className="info__pokemon__detail">
            <div className="pokemon__detail_card" >
            <button onClick={() => navigate(-1)} className="backButton" > <i className="fa-solid fa-backward-step"></i> </button>
            <div className="imagePokemon">
               <img src={pokemon.sprites?.other?.dream_world.front_default ? pokemon.sprites?.other?.dream_world.front_default : pokemon.sprites?.other.home?.front_default } alt="" />
            </div>
            <div className="pokemon__name" >
               <div className="hr__pokemonName" ></div>
               <h1> {pokemon.name} #{id}  </h1>
               <div className="hr__pokemonName" ></div>
            </div>
            <div className="infoPoke">
               <div className="type_Info" >
                  <h1>type</h1>
                  <div>
                     {
                        pokemon.types?.map(type => (
                           <p key={type.slot} > {type.type.name}</p>
                        ))
                     }
                  </div>
               </div>
               <div className="habilit_Info" >
                  <h1>skills</h1>
                  <div>
                     {
                        pokemon.abilities?.map(ability => (
                           <p key={ability.ability.name} > {ability.ability.name} </p>
                        ))
                     }
                  </div>
               </div>
            </div>
            <div className="stat_info">
               <ul>
                  {
                     pokemon.stats?.map(stat => (
                        <li key={stat.stat.name} >
                           <div className="statsInf" >
                              <p><b>{stat.stat.name}:</b></p>
                              <p> {stat.base_stat} / 150 </p>
                           </div>
                           <div className="progresBar">
                              <div className="progress" style={{ width: `${(stat.base_stat * 80) / 150}%` }}>

                              </div>
                           </div>
                        </li>
                     ))
                  }
               </ul>

               </div>
            </div>
            
            <div className="move__conten">
               <h1>movements</h1>
               <ul>
                  {
                     pokemon.moves?.map(move => (
                        <li className="btn_move" key={move.move.name}> {move.move.name} </li>
                     ))
                  }
               </ul>
            </div>
         </section>
      </div>
   );
};

export default PokemonDetail;



//cosas por poner
//
/*
<ul className="locationPokemon">
               {
                  locationPoke.map(location => (
                     <li key={location.location_area.name} >
                        <div>
                           <h2> {location.location_area.name} </h2>
                        </div>
                     </li>
                  ))
               }
            </ul>
*/