import {useContext} from 'react';
import {PokemonContext} from '../context/PokemonContext';
import {Link} from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const HomePage = () => {
  const {pokemons, onClickLoadMore} = useContext(PokemonContext);

  return (
    <>
      <div className="pokemon-container">
        {pokemons.map((pokemon) => (
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
      <div className="load-more-btn">
        <button onClick={() => onClickLoadMore()}>Cargar más</button>
      </div>
    </>
  );
};

export default HomePage;
