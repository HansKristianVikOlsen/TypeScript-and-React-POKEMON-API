import React, { Component, useState } from "react";
import User from "../interfaces/User.interface";

/*
interface SearchState {
  error: boolean;
  pokemon: Pokemon;
}

interface Pokemon {
  name: string;
  numberOfAbilities: number;
  baseExperience: number;
  imageUrl: string;
}


export class PokemonSearch extends Component<User, SearchState> {
  pokemonRef: React.RefObject<HTMLInputElement>;
  constructor(props: User) {
    super(props);
    this.state = {
      error: false,
      pokemon: null
    };
    this.pokemonRef = React.createRef();
  }
  onSearchClick = () => {
    const inputValue = this.pokemonRef.current.value;

    fetch("https://pokeapi.co/api/v2/pokemon/" + inputValue).then(res => {
      if (res.status != 200) {
        this.setState({ error: true });
      }
      res.json().then(data => {
        this.setState({
          error: false,
          pokemon: {
            name: data.name,
            numberOfAbilities: data.abilities.length,
            baseExperience: data.base_experience,
            imageUrl: data.sprites.front_default
          }
        });
      });
    });
  };
  render() {
    const { name: userName, numberOfPokemons } = this.props;
    const { error, pokemon } = this.state;

    let resultMarkup;
    if (error) {
      resultMarkup = <p>Pokemon not found</p>;
    } else if (this.state.pokemon) {
      resultMarkup = (
        <div>
          <img src={pokemon.imageUrl} alt="pokemon" className="pokemon-image" />
          <p>
            {pokemon.name} has {pokemon.numberOfAbilities} abilities and{" "}
            {pokemon.baseExperience} base experiece points
          </p>
        </div>
      );
    }

    return (
      <div>
        <p>
          User {userName}{" "}
          {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>}
        </p>
        <input type="text" ref={this.pokemonRef} />
        <button onClick={this.onSearchClick}>search</button>
        {resultMarkup}
      </div>
    );
  }
}



function PokemonSearch<User , SearchState> () {
  const [error, pokemon, addPokemon] = useState;
  pokemonRef: React.RefObject<HTMLInputElement>;
  pokemonRef = React.createRef()

  function onSearchClick ()  {
    const inputValue = pokemonRef.current.value;
     
    fetch("https://pokeapi.co/api/v2/pokemon/" + inputValue).then(res => {
      if (res.status != 200) {
        error: true;
      }
      res.json().then(data => {
        pokemon : ({
          error: false,
          pokemon: {
            name: data.name,
            numberOfAbilities: data.abilities.length,
            baseExperience: data.base_experience,
            imageUrl: data.sprites.front_default
          }
        });
      });
    });
  };


  
    let resultMarkup;
    if (error) {
      resultMarkup = <p>Pokemon not found</p>;
    } else if (pokemon) {
      resultMarkup = (
        <div>
          <img src={pokemon.imageUrl} alt="pokemon" className="pokemon-image" />
          <p>
            {pokemon.name} has {pokemon.numberOfAbilities} abilities and{" "}
            {pokemon.baseExperience} base experiece points
          </p>
        </div>
      );
    }

    return (
      <div>
        
        <input type="text"  ref={pokemonRef}/>
        <button onClick={onSearchClick}>search</button>
        {resultMarkup}
      </div>
    );
  
}
*/
interface Test {
  testTing: string;
}

function PokemonSearch(props: Test) {
  const [pokemon, setPokemon] = useState({
    name: "",
    base_experience: 0,
    sprites: null,
    abilities: [],
    height: 0
  });

  function handleChange(event) {
    const updatePokemon = {
      name: event.target.value,
      base_experience: 0,
      front_default: "",
      sprites: null,
      abilities: [],
      height: 0
    };
    setPokemon(updatePokemon);
  }

  function getData(pokName) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + pokName).then(res =>
      res.json()
    );
  }

  /*
  function getData(pokName) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + pokName)
      .then(res => res.json())
      .then(data => {
        pokemon: ({
          name: data.name,
          base_experience: data.base_experience
        });
      });
  }
*/
  let result;
  function onClick() {
    getData(pokemon.name).then(_pokemon => setPokemon(_pokemon));
    /*
    setPokemon( getData());
    const data = fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name).then(res => {
      res.json().then(data => {
        setPokemon : {
          name : data.name,
          numberOfAbilities: data.abilities.length
      })
    });
    */
  }
  if (pokemon.base_experience != 0) {
    result = (
      <div>
        Pokemon name : {pokemon.name} has {pokemon.base_experience} base
        experience
        <img src={pokemon.sprites.front_default} />
        <img src={pokemon.sprites.back_default} />
        <img src={pokemon.sprites.back_shiny} />
        <h2>Abilities</h2>
        <ol>
          {pokemon.abilities.map(abilities => {
            return (
              <li key={abilities.ability.name}>{abilities.ability.name}</li>
            );
          })}
          <h2>pokemon.height</h2>
          <p>{pokemon.height}</p>
          {props.testTing}
        </ol>
      </div>
    );
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={onClick}>Search Pokemon!</button>
      {result}
    </>
  );
}

export default PokemonSearch;
