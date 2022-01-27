import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import PokemonDiscoveryPage from "./Pages/PokemonDiscoveryPage";
import PokemonDetailPage from "./Pages/PokemonDetailPage";

function App() {
  return (
    <div className="App">
      <h1>Pokemon Discovery</h1>
      <div>
        <NavLink end to="/">
          Home
        </NavLink>
      </div>
      <br />
      <div>
        <Routes>
          <Route path="/" element={<PokemonDiscoveryPage />} />
          <Route path="/detail/:pokemonName" element={<PokemonDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
