import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {PokemonPage, HomePage} from './pages';
import PokemonProvider from './context/PokemonProvider';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<HomePage />} />
              <Route path="pokemon/:id" element={<PokemonPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </PokemonProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
