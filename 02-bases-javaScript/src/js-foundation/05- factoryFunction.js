const { v4: uuidv4  } = require('uuid');
const getAge = require('get-age')

const buildPerson = ({name, birthdate}) => {
  return{
    id: uuidv4(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
  }
}

const obj = {name: 'Jhon Doe', birthdate: '1996-5-1'};
const jhon = buildPerson(obj);
console.log(jhon);