# Comandos terminal TypeScript
Nos genera el .js del archivo typescript en es6;

```
npx tsc src/hello.ys
```

Nos genera los .js del los archivos typescript en es6 y los guarda en el directorio ```dist```;
```
npx tsc src/*.ts --target es6 --outDir dist
```

Por defecto nos lo generará en ES3

## TSConfig.json
Nos crea el TSConfig.json
```
npx tsc --init
```

Nos va a ejecutar el archivo tsconfig.json
```
npx tsc 
```

Constantemente nos va a estar leyendo los ts y los va a estar mirando (es como que va compilando los archivos ts a js en tiempo real)
```
npx tsc --watch
```
