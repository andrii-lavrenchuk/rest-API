import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PokemonForm from "./components/PokemonForm";
import PokemonInfo from "./components/PokemonInfo/";
import Articles from "./components/Articles";

export default class App extends Component {
  state = {
    pokemonName: "",
  };
  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <div>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
        <Articles />
      </div>
    );
  }
}
