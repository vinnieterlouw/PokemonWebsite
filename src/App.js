import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Pokemon Discovery</h1>
      <div>
        <NavLink end to="/">
          Home
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element="<PokemonDiscoveryPage />" />
      </Routes>
    </div>
  );
}

export default App;
