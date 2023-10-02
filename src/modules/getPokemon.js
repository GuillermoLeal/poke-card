const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async (id) => {
  const data = await fetch(`${API_URL}/${id}`).then((res) => res.json());

  const pokemonData = {
    id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    types: data.types.map(item => item.type.name)
  };

  return pokemonData;
};
