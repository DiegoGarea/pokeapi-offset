import React, {useState, useEffect, useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import {PokemonContext} from '../context/PokemonContext';
import {Loader} from '../components/Loader';
import Tilt from 'react-parallax-tilt';

const SearchPage = () => {
  const {name} = useParams();
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const {getGlobalPokemons} = useContext(PokemonContext);

  console.log(allPokemons);

  const results = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(name.toLowerCase())
  );

  useEffect(() => {
    getGlobalPokemons((pokemons) => {
      setAllPokemons(pokemons);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : results.length > 0 ? (
        <div className="pokemon-container">
          {results.map((pokemon) => (
            <Link
              to={`/pokemon/${pokemon.id}`}
              key={pokemon.id}
              className="no-underline"
            >
              <Tilt
                className="parallax-effect"
                perspective={600}
                glareEnable={true}
                glareMaxOpacity={0.7}
                glareColor="white"
                glarePosition="all"
                glareBorderRadius="16px"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
              >
                <div className="pokemon-div inner-element">
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={`Pokemon: ${pokemon.name}`}
                  />
                  <p className="pokemon-name">{pokemon.name}</p>
                </div>
              </Tilt>
            </Link>
          ))}
        </div>
      ) : (
        <p>No matching Pokémon found.</p>
      )}
    </>
  );
};

export default SearchPage;
