/*
  Patron adaptaor: no es mas que crear nuestro propio codigo
  que adapta una dependencia de terceros (uuid...etc) de terceros,
  con el fin de que nuestro codigo no depende 100% de discha dependencia
  de terceros, hacemos uso de la carpeta --> plugins <--.
*/

const {getAge, getUUID} = require('../plugins')

const buildPerson = ({name, birthdate}) => {
  return{
    id: getUUID(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
  }
}

const obj = {name: 'Jhon Doe', birthdate: '1996-5-1'};
const jhon = buildPerson(obj);
console.log(jhon);