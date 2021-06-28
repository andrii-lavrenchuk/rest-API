import axios from "axios";

function fetchPokemon(name) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
    (res) => res.data

    // if (res.ok) {
    //   return res.json();
    // }

    // return Promise.reject(new Error(`Нема покемона з іменем ${name}`));
  );
}

const api = { fetchPokemon };

export default api;
