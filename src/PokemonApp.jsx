import { useDispatch, useSelector } from "react-redux";
import { getPokemons, pokemonSlice } from "./store/slices/pokemon";
import { useEffect, useState } from "react";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons: pokemonsData,
    page,
  } = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons(0));
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading:{isLoading ? "True" : "False"} </span>
      <ul>
        {pokemonsData.map(({name}) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button
        disabled={isLoading}
        onClick={() => {
          dispatch(getPokemons(page));
        }}
      >
        NEXT
      </button>
    </>
  );
};
