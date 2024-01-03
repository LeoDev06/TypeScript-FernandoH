const getPokemonById = (id) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  /* 
   ? Opcion uno
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((pokemon) => {
      callback(pokemon.name);
    })
 */

  //?opcion dos
  return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon.name)
}

module.exports = getPokemonById;