import { ImSpinner } from "react-icons/im";
import s from "./PokemonPendingView.module.css";
import pendingImage from "../pending.png";
import PokemonDataView from "../PokemonDataView";

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <ImSpinner size="32" className={s.iconSpin} />
      <div>Loading...</div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
