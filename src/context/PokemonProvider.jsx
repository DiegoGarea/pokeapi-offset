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
        onClickLoadMore,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
