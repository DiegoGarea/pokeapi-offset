import {useParams, Link} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {PokemonContext} from '../context/PokemonContext';
import Tilt from 'react-parallax-tilt';

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState({});

  const {id} = useParams();
  const {getPokemonById} = useContext(PokemonContext);

  useEffect(() => {
    getPokemonById(id, setPokemon);
  }, [id]);

  console.log(pokemon);

  return (
    <>
      <Tilt
        className="parallax-effect-id"
        perspective={500}
        tiltMaxAngleX={0.5}
        tiltMaxAngleY={0.5}
      >
        <div className="left-container">
          {pokemon.sprites && (
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`Pokemon: ${pokemon.name}`}
            />
          )}
        </div>
        <div className="right-container">
          <div className="pokemon-div-id">
            <p>{pokemon.name}</p>
          </div>
          {pokemon.types?.map((type) => (
            <p key={type.type.name}>{type.type.name}</p>
          ))}
          {pokemon.stats?.map((stat) => (
            <p key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </p>
          ))}
        </div>
      </Tilt>
      <Link className="back-btn" to={'/'}>
        Atras
      </Link>
    </>
  );
};

export default PokemonPage;
