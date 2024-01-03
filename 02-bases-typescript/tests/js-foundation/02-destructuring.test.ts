import {characters} from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring', () => {

  test('characters should containt Flash, Superman', () => {

    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');

  })

  test('first character should be Flash, an second Superman', () => {

    const [Flash, Superman] = characters;
    expect(Flash).toBe('Flash');
    expect(Superman).toBe('Superman');
  })

})