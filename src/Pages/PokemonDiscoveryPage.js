import axios from "axios";
import { useEffect, useState } from "react";
import PokemonBlock from "../Components/PokemonBlock";

export default function PokemonDiscoveryPage() {
  const [pokeList, setPokelist] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      const pokeResponse = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokelist(pokeResponse.data.results);
    }
    getPokemons();
  }, []);

  return (
    <div>
      {pokeList ? (
        pokeList.map((pokeObj) => <PokemonBlock name={pokeObj.name} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
