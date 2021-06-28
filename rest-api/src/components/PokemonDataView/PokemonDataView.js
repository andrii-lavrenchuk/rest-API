export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <img
        src={sprites.other["official-artwork"].front_default}
        width="240"
        alt={name}
      />
      <h2>{name}</h2>
      <ul>
        {stats.map((value) => (
          <li key={value.stat.name}>
            {value.stat.name} : {value.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
