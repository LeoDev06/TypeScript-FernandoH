describe('App', () => {
  test('Test in the faile app', () => {

    /* 
      ? 1. Arrange -> Arrreglar el test 
      Inicializacion de importaciones y variables necesarias
    */
    const num1: number = 10;
    const num2: number = 20


    /* 
      ? 2. Act -> Actuar o aplicación de estimulos
      llamada a metodos y simular clicks      
    */
    const result: number = num1 + num2;

    /* 
      ? 3. Assert
      Realizar acciones sobre el paso anterior a los metodos o clases
      verificar la veracidad del funcionamiento del metodo o la clase
      desmostrando que es el resultado esperado el producto resivido
    */

    expect(result).toBe(30);


    //TODO: se corre con el comando: npm run test
  })
})