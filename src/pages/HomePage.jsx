import {useContext} from 'react';
import {PokemonContext} from '../context/PokemonContext';
import {Link} from 'react-router-dom';

const HomePage = () => {
  const {pokemons, onClickLoadMore} = useContext(PokemonContext);

  console.log(pokemons);

  return (
    <div>
      <div className="pokemon-container">
        {pokemons.map((pokemon) => (
          <Link
            to={`/pokemon/${pokemon.id}`}
            key={pokemon.id}
            className="no-underline"
          >
            <div className="pokemon-div">
              <img
                src={
                  pokemons.indexOf(pokemon) < 50
                    ? pokemon.sprites.other.dream_world.front_default
                    : pokemon.sprites.other.dream_world.front_default
                }
                alt={`Pokemon: ${pokemon.name}`}
              />
              <p className="pokemon-name">{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="load-more-btn">
        <button onClick={() => onClickLoadMore()}>Cargar más</button>
      </div>
    </div>
  );
};

export default HomePage;
