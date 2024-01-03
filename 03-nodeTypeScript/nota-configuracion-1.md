Pasos para usar Node con TypeScript con Nodemon
Más información - Docs Oficiales

Instalar TypeScript y tipos de Node, como dependencia de desarrollo
npm i -D typescript @types/node
Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
npx tsc --init --outDir dist/ --rootDir src
Opcional - Para traspilar el código, se puede usar este comando
npx tsc
npx tsc --watch
Configurar Nodemon y Node-TS
npm install -D ts-node nodemon
Crear archivo de configuración de Nodemon - nodemon.json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
Crear script para correr en desarrollo en el package.json
  "dev": "nodemon"
  "dev": "npx nodemon" // En caso de no querer instalar nodemon
Instalar rimraf (Herramienta que funciona similar al rm -f) eliminar directorio
npm install -D rimraf
Crear scripts en el package.json para construir e iniciar en producción
   "build": "rimraf ./dist && tsc",
   "start": "npm run build && node dist/app.js"