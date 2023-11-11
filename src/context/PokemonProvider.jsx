import {useEffect, useState} from 'react';
import {PokemonContext} from './PokemonContext';

const PokemonProvider = ({children}) => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  // llamar 50 pokemones a la API
  const getAllPokemons = async (limit = 50) => {
    const url = 'https://pokeapi.co/api/v2/';
    const res = await fetch(`${url}pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    setPokemons([...pokemons, ...results]);
  };

  // llamar todos los pokemones de la API
  const getGlobalPokemons = async (state) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100000';
    const res = await fetch(`${url}`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    state(results);
  };

  // llamar pokemon por id
  const getPokemonById = async (id, state) => {
    const url = 'https://pokeapi.co/api/v2/';
    const res = await fetch(`${url}pokemon/${id}`);
    const data = await res.json();
    state(data);
  };

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  const onClickLoadMore = () => {
    setOffset(offset + 50);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        getGlobalPokemons,
        getPokemonById,
        onClickLoadMore,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
