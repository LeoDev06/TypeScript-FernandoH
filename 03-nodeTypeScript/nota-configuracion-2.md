
Node con TypeScript - Recomendado
Instalar TypeScript y demás dependencias
npm i -D typescript @types/node ts-node nodemon rimraf
Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
npx tsc --init --outDir dist/ --rootDir src
Crear archivo de configuración Nodemon - nodemon.json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
Crear scripts para dev, build y start:
  "dev": "nodemon",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"