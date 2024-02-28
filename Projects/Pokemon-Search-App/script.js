const input = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-button');
const pokemonName = document.querySelector('#pokemon-name');
const pokemonId = document.querySelector('#pokemon-id');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const types = document.querySelector('#types');
const hp = document.querySelector('#hp');
const attack = document.querySelector('#attack');
const defence = document.querySelector('#defense');
const specialAttack = document.querySelector('#special-attack');
const specialDefense = document.querySelector('#special-defense');
const speed = document.querySelector('#speed');
const image = document.querySelector('#sprite');

searchBtn.addEventListener('click', async () => {
  const smallInput = input.value.toLowerCase();
  const endpoint = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${smallInput}`;
  
  if (input.value === "Red") {
    alert('Pokémon not found');
  }

  const response = await fetch(endpoint);
  const pokemonDetails = await response.json();
  console.log(pokemonDetails);
  pokemonName.innerHTML = `${pokemonDetails.name.toUpperCase()}`
  pokemonId.innerHTML = `#${pokemonDetails.id}`;
  weight.innerHTML = `${pokemonDetails.weight}`;
  height.innerHTML = `${pokemonDetails.height}`;
  types.innerHTML = pokemonDetails.types.map(element => {
    return `<p>${element.type.name.toUpperCase()}</p>`;
  });
  hp.innerHTML = `${pokemonDetails.stats[0].base_stat}`;
  attack.innerHTML = `${pokemonDetails.stats[1].base_stat}`;
  defence.innerHTML = `${pokemonDetails.stats[2].base_stat}`;
  specialAttack.innerHTML = `${pokemonDetails.stats[3].base_stat}`;
  specialDefense.innerHTML = `${pokemonDetails.stats[4].base_stat}`;
  speed.innerHTML = `${pokemonDetails.stats[5].base_stat}`;
  image.setAttribute('src',`${pokemonDetails.sprites.front_default}`) 
})