import {Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import pokelogo from '../assets/pokelogo.png';

const Navigation = () => {
  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img src={pokelogo} alt="pokeball" />
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
