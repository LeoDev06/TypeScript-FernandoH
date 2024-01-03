/*
  Esta parte del codigo va de la mano con el patron adaptador
  o rapper
*/
const http = {
  get: async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
};

module.exports = {
  http
};