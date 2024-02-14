const imgPokemons = {
  arcanine: 'public/arcanine.png',
  blastoise: 'public/blastoise.png',
  charizard: 'public/charizard.png',
  dragonite: 'public/dragonite.png',
  eevee: 'public/eevee.png',
  gengar: 'public/gengar.png',
  mew: 'public/mew.png',
  pikachu: 'public/pikachu.png',
  snorlax: 'public/snorlax.png',
  venusaur: 'public/venusaur.png'
}

const pokemonImages = [
  imgPokemons.charizard,
  imgPokemons.arcanine,
  imgPokemons.blastoise,
  imgPokemons.dragonite,
  imgPokemons.eevee,
  imgPokemons.gengar,
  imgPokemons.mew,
  imgPokemons.pikachu,
  imgPokemons.snorlax,
  imgPokemons.venusaur,
  imgPokemons.charizard,
  imgPokemons.arcanine,
  imgPokemons.blastoise,
  imgPokemons.dragonite,
  imgPokemons.eevee,
  imgPokemons.gengar,
  imgPokemons.mew,
  imgPokemons.pikachu,
  imgPokemons.snorlax,
  imgPokemons.venusaur
]

// Función para ordenar aleatoriamente un array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

// Imágenes de Pokémon ordenadas aleatoriamente
export const shuffledPokemonImages = shuffleArray([...pokemonImages])
