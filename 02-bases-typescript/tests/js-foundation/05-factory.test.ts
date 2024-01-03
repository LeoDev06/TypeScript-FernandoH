import { buildMakePerson } from '../../src/js-foundation/05-factory';

/* 
    Este test evalua que realmente sea una funcion mas no evalua la
    informacion como tal de esta, para luego hacer otro test que va evaluar 
    que la funcion este funcionando adecuadamente, para evitar ambiguedades

    TODO: aqui se ignora las librerias de terceros ya que eso no es de evaluar dentro de un test

  */

describe('js-foundation/05-factory', () => {

  const getUUID = () => '1234'
  const getAge = () => 35;

  
  test('buildMakePerson should return a function', () => {

    const makePerson = buildMakePerson({ getUUID, getAge})
    expect(typeof makePerson).toBe('function')

  })


test('buildMakePerson should return a person', () => {

  const makePerson = buildMakePerson({getUUID, getAge});
  const jhonDoe = makePerson({name: 'John Doe', birthdate: '1985-10-21'});

  expect(jhonDoe).toEqual({
      id: '1234',
      name: 'John Doe',
      birthdate: '1985-10-21',
      age: 35,
  })

})


})