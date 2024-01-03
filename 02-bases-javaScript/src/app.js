// ?Importaciones
// const template =  require('./js-foundation/01-template')// asi se importa archivos en node
/* 
  const { getUserById } = require('./js-foundation/04-arrowFunction');

  const id = 1;

  getUserById(id, (error, user) => {
    if(error) throw new Error(error);

    console.log(user);
  }); 
*/

/* const getPokemonByID =  require('./js-foundation/08-promesas');

getPokemonByID(2, (pokemon) => {
  console.log({pokemon});
}); */

/* 
//TODO: Optimización de una promesa y promesas en cadena
const getPokemonByID =  require('./js-foundation/12-axiosClienteHttp');

getPokemonByID(2)
  .then((pokemon) => console.log(pokemon)); 
 */

  const {buildLogger2} = require('./plugins');

  const logger = buildLogger2('app.js');

  logger.log('Hola mundo');