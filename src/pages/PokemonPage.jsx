import {useParams} from 'react-router-dom';
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
    <div className="id-container">
      <Tilt
        className="parallax-effect-id"
        perspective={600}
        glareEnable={true}
        glareMaxOpacity={0.7}
        glareColor="white"
        glarePosition="all"
        glareBorderRadius="16px"
      >
        <div className="pokemon-id inner-element-id">
          <div className="pokemon-div-id">
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites?.other.dream_world.front_default}
              alt={`Pokemon: ${pokemon.name}`}
            />
          </div>
        </div>
      </Tilt>
      <Tilt
        className="margin-left"
        tiltEnable={true}
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareColor="white"
        glarePosition="all"
        glareBorderRadius="16px"
      >
        <div>
          <div className="stats-div">
            {pokemon.stats?.map((stat) => (
              <p className="pokemon-name-id" key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default PokemonPage;
