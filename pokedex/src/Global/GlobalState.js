import React, { useState } from 'react';
import { BASE_URL } from '../constants/BASE_URL';
import useRequestData from '../hooks/useRequestData';
import { GlobalStateContext } from './GlobalStateContext'


const GlobalState = (props) => {

  const [pagination, setPagination] = useState(1);

  const [pokemonsList, error, loading] = useRequestData(`${BASE_URL}?limit=20&offset=${(pagination - 1) * 20}`);
  
  const [page, setPage] = useState(localStorage.getItem('page') || "home");

  const [pokemon, setPokemon] = useState('')

  const [pokedex, setPokedex] = useState(JSON.parse(localStorage.getItem('pokedex')) || []);

  const states = { page, pokedex, pokemon, pagination };

  const setters = { setPage, setPokedex, setPokemon, setPagination };

  const requests = { pokemonsList, error, loading };



  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
