import errorImage from "../error.jpg";

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="error" width="240" />
      <p>{message}</p>
    </div>
  );
}
