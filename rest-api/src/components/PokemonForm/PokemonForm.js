import { Component } from "react";
import { toast } from "react-toastify";

export default class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };

  handleNameChange = (e) => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === "") {
      return toast.error("Fill form");
    }
    this.props.onSubmit(this.state.pokemonName);

    this.setState({ pokemonName: "" });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
