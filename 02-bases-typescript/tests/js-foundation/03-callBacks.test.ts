import {getUserById} from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks', () => {

  test('getUserById should be return an error if user does not exist', (done) => {
    
    const id = 10;
    getUserById(id, (err, user) => {

      expect(err).toBe(`User not found with id ${id}`)
      expect(user).toBeUndefined();
      done(); // no termina la prueba hasta que no se ejecute el done -> parte de la libreria de jest
    });
  })

  test('getUserById should be return user exist', (done) => {
    
    const id = 1;
    getUserById(id, (err, user) => {

      expect(err).toBeUndefined()
      expect(user).toEqual({
        id: 1,
        name: 'John Doe',
      });
    })

    done(); // no termina la prueba hasta que no se ejecute el done -> parte de la libreria de jest
  });
})