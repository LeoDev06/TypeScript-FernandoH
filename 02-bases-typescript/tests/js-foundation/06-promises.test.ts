import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {

  const id = 1 ;

  test('getPokemonById should be return a pokemon',async() => {
    
    const pokemonName = await getPokemonById(id);
    expect(pokemonName).toBe('bulbasaur');

  });

  test('sould return an error if pokemon does not exist', async() => {

    const id = 10000000;

    try {
      await getPokemonById(id);
      expect(true).toBeFalsy();

    } catch (error) {
      expect(error).toBe(`pokemon not found with id ${id}`)
    }

  });

})