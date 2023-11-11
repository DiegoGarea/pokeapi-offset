import {Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import pokelogo from '../assets/pokelogo.png';
import searchicon from '../assets/searchicon.png';

import {useState} from 'react';

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img src={pokelogo} alt="pokeball" />
        </Link>
        <form onSubmit={handleSearchSubmit}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <Link to={`/search/pokemon/${searchTerm}`}>
              <button onClick={() => setSearchTerm('')}>
                <img
                  className="search-icon"
                  style={{width: '20px', height: '20px'}}
                  src={searchicon}
                  alt="search-icon"
                />
              </button>
            </Link>
          </div>
        </form>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
