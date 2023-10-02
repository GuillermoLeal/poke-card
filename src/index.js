import { getPokemon } from "./modules/getPokemon.js";
import { createCard } from "./modules/createCard.js";
import VanillaTilt from "vanilla-tilt";

const MAX_POKEMON = 151;

const randomPokemon = () => Math.ceil(Math.random() * MAX_POKEMON);

const addPokemon = async (id) => {
  const pokemon = await getPokemon(id);
  createCard(pokemon);
};

await addPokemon(randomPokemon());
await addPokemon(randomPokemon());
await addPokemon(randomPokemon());

const cards = document.querySelectorAll(".card");
VanillaTilt.init(cards, { glare: true });
